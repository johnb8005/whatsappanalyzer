import Utils from "@nexys/utils";

const { formatNumber } = Utils.number;
const { padding } = Utils.string;
const {
  formatDate,
  formatTime: utilFormatTime,
  countDaysDiffBtnDates,
} = Utils.date;

const formatDateAndTime = (d) => formatDate(d) + " - " + utilFormatTime(d);

export { formatNumber, formatDateAndTime };

// todo add to utils
/**
 * [description]
 * @param  {[type]}   arr [description]
 * @param  fn  function that maps the value that is transposed to a potential other value. By default returns same value
 * @return {[type]}       [description]
 */
export const transpose = (arr, fn = (a) => a) => {
  const r = {};

  Object.keys(arr).map((idx) => {
    return Object.keys(arr[idx]).map((d) => {
      if (!r[d]) {
        r[d] = {};
      }

      r[d][idx] = fn(arr[idx][d]);

      return true;
    });
  });

  return r;
};

const formatDateParse = (day, month, year) => {
  return `20${year}-${padding(month, 2)}-${padding(day, 2)}`;
};

const formatTime = (hour, minute) => {
  return `${padding(hour, 2)}:${padding(minute, 2)}:00`;
};

const parseLine = (
  line,
  re = /(\d{1,2})\/(\d{1,2})\/(\d{2}), (\d{1,2}):(\d{2}) [AP]M - ([^:]+):(.*)/g, // regex with AM/PM
  attempt = 1
) => {
  const a = re.exec(line);

  // check if parsing was succesful and that we get the expected amount of fields
  if (a && a.length === 8) {
    /* eslint-disable no-unused-vars */
    const [_, month, day, year, hour, minute, sender, content] = a;
    /* eslint-enable no-unused-vars */

    const date = formatDateParse(day, month, year);
    const time = formatTime(hour, minute);

    return { date, time, sender, content };
  }

  if (attempt === 1) {
    // try  without AM/PM
    return parseLine(
      line,
      /(\d{1,2})\/(\d{1,2})\/(\d{2}), (\d{1,2}):(\d{2}) - ([^:]+):(.*)/g,
      2
    );
  }

  return null;
};

export const getContent = (lines) =>
  lines.map((line) => parseLine(line)).filter((line) => line !== null);

export const getSenders = (content) => {
  const senders = {
    times: {},
    days: {},
    all: {},
  };

  // init times
  for (let i = 0; i < 24; i++) {
    senders.times[i] = {};
  }

  content.map((c) => {
    const sender = senders.all[c.sender];

    // init object with new sender key
    // do it both for `all` and days
    if (!sender) {
      senders.all[c.sender] = 0;
      senders.days[c.sender] = {};
    }

    senders.all[c.sender] += 1;

    // update hour attribute
    const hourIndex = Number(c.time.substr(0, 2));

    const senderHour = senders.times[hourIndex][c.sender];

    if (!senderHour) {
      senders.times[hourIndex][c.sender] = 0;
    }

    senders.times[hourIndex][c.sender] += 1;
    // end hours

    // update days attribute
    // here we don't have to check whether sender already exist since it was added earlier, only check for day
    if (!senders.days[c.sender][c.date]) {
      senders.days[c.sender][c.date] = { messages: 0, chars: 0, words: 0 };
    }

    // dummy var
    const d = senders.days[c.sender][c.date];

    d.messages += 1;
    d.chars += c.content.length;
    d.words += countWordsLine(c.content);
    // end days

    return true;
  });

  return senders;
};

const toDate = (c) => {
  const datestr = c.date + "T" + c.time;

  return new Date(datestr);
};
const countWordsLine = (line) => line.split(/\s+/).length;

const count = (content) => {
  return content
    .map((c) => {
      const nWords = countWordsLine(c.content);
      const nChars = c.content.length;

      return { nWords, nChars };
    })
    .reduce((a, b) => {
      return {
        nWords: a.nWords + b.nWords,
        nChars: a.nChars + b.nChars,
      };
    });
};

export const getTotals = (content) => {
  const n = content.length;
  const firstMessage = content[0];
  const lastMessage = content[n - 1];

  console.log({ firstMessage, lastMessage });

  const firstTime = toDate(firstMessage);
  const lastTime = toDate(lastMessage);

  const nDays = countDaysDiffBtnDates(firstTime, lastTime);

  const { nWords, nChars } = count(content);

  return { n, firstTime, lastTime, nDays, nWords, nChars };
};
