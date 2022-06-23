const connection = require("./connection-wrapper");

async function getAllNets() {
  let sql =
  "SELECT s.server_id, s.name, s.ip, c.company_name as companyName, s.is_server_on as status, s.create_server_time as serverTime FROM servers s JOIN companies c ON s.hosting_company_id = c.company_id";
    let nets = await connection.execute(sql);
    return nets;
}

async function changeStatus() {
  let sql = 
  "UPDATE servers SET is_server_on = ? WHERE server_id = ?;"
  return;
}

module.exports = { 
    getAllNets,
    changeStatus
}