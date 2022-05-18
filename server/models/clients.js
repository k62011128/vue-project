// 导入 mongoose 模块
const mongoose = require('mongoose');
// 设置默认 mongoose 连接,如果没有对应名字的数据库会自动创建
const url = 'mongodb://localhost:27017/Database';
mongoose.connect(url);
//检查是否连接成功
var clients = mongoose.connection;
clients.on('connected', (err) => {
    if (err) {
        console.log("连接clients失败:" + err);
    }
    else {
        console.log("连接clients成功!");
    }
})
//设置自定义的模式实例
var clientSchema = new mongoose.Schema(
    {
        "clientName":String,
        "clientId":String,
        'registerDate':String,
        'priority':Number
    }
);
//第一个参数是模型名，第二个参数是自定义的模式实例，第三个参数是数据库中的集合名,没有会自动创建,默认名是模型名称+s，第三个参数可以不加
module.exports=mongoose.model('Client',clientSchema);
