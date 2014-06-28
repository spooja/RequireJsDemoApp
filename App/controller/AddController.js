define(['view/AddView', 'model/users'], function (AddView, users)
{
    function start() {
        AddView.render();
        bindEvents();
    }

    function bindEvents() {
        document.getElementById('add').addEventListener('click', function () {
            var user = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            user.push(new users(userName));
            localStorage.users = JSON.stringify(user);
            window.location.hash = '#list';
            ////require(['controller/ListController'], function (ListController) {
            ////    ListController.start();
            ////});
        }, false);
    }


    return {
        start : start
    };
});