const netDal = require("../dal/net-dal");

async function getAllNets() {
    return await netDal.getAllNets();
}

async function changeStatus(currentServerStatus) {
    let newStatus = (!currentServerStatus);
    return await netDal.changeStatus(newStatus);
}

module.exports = { 
    getAllNets,
    changeStatus
}