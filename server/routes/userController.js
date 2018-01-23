userController = {
    getUsers: (err, callback) => {
        callback([
                     {
                         "id": "5a5f35a0fc206999f3a68586",
                         "isAdmin": "false",
                         "name": "Fay Blackwell",
                         "email": "fayblackwell@geeketron.com",
                         "registered": "2014-03-07T10:36:59 -02:00"
                     },
                     {
                         "id": "5a5f35a08e814e6ffc45eb64",
                         "isAdmin": "false",
                         "name": "Kristina Baxter",
                         "email": "kristinabaxter@geeketron.com",
                         "registered": "2017-06-14T05:25:10 -03:00"
                     }]);
    }
};

module.exports = userController;
