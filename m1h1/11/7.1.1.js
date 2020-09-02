<!doctype html>
<html>
    <head>
        <title>Console Demo</title>
    </head>

    <body>
    <h1>Hello, World!</h1>
    <script>
        console.log('Loading!');
        const h1 = document.querySelector('h1)');
        console.log(h1.textContent);
        console.assert(document.querySelector('h2'), 'h2 not found!');
        const artists = [
            {
                first   : 'Farrel'
                last    : 'Reginaldo'
            }, {
                first   : 'Muhammad'
                last    : 'Hakim'
            }, {
                first   : 'Kevin'
                last    : 'Sanjaya'
            }
        ];
        console.table(artists);
        setTimeout(() => {
           h1.textContent = 'Hello, Console!' :
           console.log(h1.textContent) ;
        }, timeout);
    </script>
    </body>
</html>