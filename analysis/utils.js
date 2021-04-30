import Utils from "../_snowpack/pkg/@nexys/utils.js";
const {formatNumber} = Utils.number;
const {padding} = Utils.string;
const {
  formatDate,
  formatTime: utilFormatTime,
  countDaysDiffBtnDates
} = Utils.date;
const formatDateAndTime = (d) => formatDate(d) + " - " + utilFormatTime(d);
export {formatNumber, formatDateAndTime};
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
const parseLine = (line, re = /(\d{1,2})\/(\d{1,2})\/(\d{2}), (\d{1,2}):(\d{2}) [AP]M - ([^:]+):(.*)/g, attempt = 1) => {
  const a = re.exec(line);
  if (a && a.length === 8) {
    const [_, month, day, year, hour, minute, sender, content] = a;
    const date = formatDateParse(Number(day), Number(month), Number(year));
    const time = formatTime(Number(hour), Number(minute));
    return {date, time, sender, content};
  }
  if (attempt === 1) {
    return parseLine(line, /(\d{1,2})\/(\d{1,2})\/(\d{2}), (\d{1,2}):(\d{2}) - ([^:]+):(.*)/g, 2);
  }
  return null;
};
export const getContent = (lines) => lines.map((line) => parseLine(line)).filter((line) => line !== null);
export const getSenders = (content) => {
  const senders = {
    times: {},
    days: {},
    all: {}
  };
  for (let i = 0; i < 24; i++) {
    senders.times[i] = {};
  }
  content.map((c) => {
    const sender = senders.all[c.sender];
    if (!sender) {
      senders.all[c.sender] = 0;
      senders.days[c.sender] = {};
    }
    senders.all[c.sender] += 1;
    const hourIndex = Number(c.time.substr(0, 2));
    const senderHour = senders.times[hourIndex][c.sender];
    if (!senderHour) {
      senders.times[hourIndex][c.sender] = 0;
    }
    senders.times[hourIndex][c.sender] += 1;
    if (!senders.days[c.sender][c.date]) {
      senders.days[c.sender][c.date] = {messages: 0, chars: 0, words: 0};
    }
    const d = senders.days[c.sender][c.date];
    d.messages += 1;
    d.chars += c.content.length;
    d.words += countWordsLine(c.content);
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
  return content.map((c) => {
    const nWords = countWordsLine(c.content);
    const nChars = c.content.length;
    return {nWords, nChars};
  }).reduce((a, b) => {
    return {
      nWords: a.nWords + b.nWords,
      nChars: a.nChars + b.nChars
    };
  });
};
export const getTotals = (content) => {
  const n = content.length;
  const firstMessage = content[0];
  const lastMessage = content[n - 1];
  console.log({firstMessage, lastMessage});
  const firstTime = toDate(firstMessage);
  const lastTime = toDate(lastMessage);
  const nDays = countDaysDiffBtnDates(firstTime, lastTime);
  const {nWords, nChars} = count(content);
  return {n, firstTime, lastTime, nDays, nWords, nChars};
};
