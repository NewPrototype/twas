const is = (interval, cycle) =>
  cycle >= interval ? Math.floor(cycle / interval) : 0;


export default  function (time, now) {
  if (!now) {
    now = Date.now();
  }
  const secs = (now - time) / 1000;
  const mins = is(60, secs);
  const hours = is(60, mins);
  const days = is(24, hours);
  const weeks = is(7, days);
  const months = is(30, days);
  const years = is(12, months);

  let amt = years;
  let cycle = 'year';
  let item = {
    'years': { amt: years, cycle: 'year' },
    'months': { amt: months, cycle: 'month' },
    'weeks': { amt: weeks, cycle: 'week' },
    'days': { amt: days, cycle: 'day' },
    'hours': { amt: hours, cycle: 'hour' },
    'mins': { amt: mins, cycle: 'minute' },
    'secs': { amt: secs, cycle: 'second' },
  }
  if (secs <= 1) {
    return 'just now';
  }
  for (let i in item) {
    if (item[i].amt > 0) {
      amt = Math.floor(item[i].amt);
      cycle = item[i].cycle;
    }
  }
  return `${amt} ${cycle}${amt > 1 ? 's' : ''} ago`;
};
