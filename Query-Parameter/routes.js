const routes = [
    { 
        method : 'GET',
        path: '/',
        handler:(request,h) => {
            return 'Homepage';
        },
    },
    {
        method : '*',
        path:'/',
        handler: (request, h) => {
            return 'Pages Cannot Access with the method';
        },
    },
    {
        method : 'GET',
        path:'/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path:'/about',
        handler: (request, h) => {
            return 'Pages Cannot Access with method';
        },
    },
    {
        method:'GET',
        path: `/hello/{name?}`,
        handler: (request, h) => {
            const{name ="stranger"} = request.params;
            const {lang } = request.query;

            if(lang === 'id'){
                return `Hai, ${name}`;
            }
            return `Hello,${name}!`;

        },
    },
    {
        method: '*',
        path:`/{any*}`,
        handler:(request, h) => {
            return 'Pages Not Found';
        },
    },
];
module.exports = routes;