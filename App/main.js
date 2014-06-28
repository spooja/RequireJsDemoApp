


require(['model/users', 'Router'], function (user, Router) {

    var users = [new user('pooja'),
             new user('jigu'),
             new user('himani'),
             new user('dhruti'),
            new user('avani')];

    localStorage.users = JSON.stringify(users);

    Router.startRouting();
});

require(['model/users', 'controller/ListController'], function (user, ListController) {

    var users = [new user('pooja'),
                 new user('jigu'),
                 new user('himani'),
                 new user('dhruti'),
                new user('avani')];
    

    localStorage.users = JSON.stringify(users);

    ListController.start();
});


//require(['model/users', 'controller/AddController'], function (user, AddController) {
    
//    var users = [new user('pooja'),
//                new user('jigu'),
//                new user('himani'),
//                new user('dhruti'),
//               new user('avani')];


//    localStorage.users = JSON.stringify(users);

//    AddController.start();

//});