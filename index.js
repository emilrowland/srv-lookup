const dns = require('dns').promises;

module.exports = async function srvLookup(hostname) {
  const records = await dns.resolveSrv(hostname);
  const record = records[Math.floor(Math.random() * records.length)];
  return `${record.name}:${record.port}`
}
