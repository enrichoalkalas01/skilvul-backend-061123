/*
    ## Structure Folder Back End ##
    - Public ( File yang dapat diakses oleh user bebas )
    - Views ( Semua file yang berhubungan dengan front end )
    - Controllers ( Semua file yang berhubungan dengan proses yang terjadi )
        - Proses untuk menampilkan atau menerima data dari dan untuk client
    - Models ( Semua file yang berhubungan dengan yang namanya database )
        - Connection Database
        - Create, Read, Update, Delete Database ( secara langsung ke database )
        - Dan lainnya
    - Routes ( Semua file yang berhubungan dengan yang namanya gateway / pintu gerbang )
        - Pintu gerbang menuju proses yang ada ( biasa nya masuk ke controllers )
        - Ini sebagai filter ke jalan yang mau dituju
    - Middlewares ( Semua file yang berhubungan dengan proses yang terjadi di belakang layar )


    ## Example Step Create Register Account ##
        == Client Side ==
            1. Input nama, email, password
            2. Validasi Password & Email
            3. Create Packet Data To API
                - Set URL ( link url)
                - Set Method ( get / post )
                - Set Headers ( Content-Type & etc )
                - Set Data ( body data )
            4. Send API ( mockapi or etc )
        
        == Server Side ==
            1. Request Masuk Ke Dalam Routes
            2. 

    ## To Do Backend ##
    1. Create Folder Structure
    2. Create Server.js Setup
    3. Create Routes Setup
    4. Create Controllers
    5. Connect Controllers To Routes
    6. Create Filter With Custom Middlewares
    7. Process the data in controllers

    ## Soal / Latihan ##
    1. Buatkan API Register & Login ( sederhana )
    1. Buatkan API Create, Update, Delete, Read Content Article
    1. Buatkan API Create, Update, Delete, Read User
    2. Test With FE or Thunder Client or Postman
    3. Show the results


    How To Generate Models Sequelize
    --  Models adalah tempat untuk menghubungkan antara BE dengan Database
    --  Migrations adalah tempat untuk membuat kerangka table database
    --  Membuat models pada sequelize sebenarnya kita membuat models dan juga migration
        pada database
    --  Migrate adalah cara untuk menerapkan strukture table yang sudah kita buat kedalam
        database
    --  Seed adalah data dummy / example data yang dibuat di backend yang dimana bisa sebagai
        pengganti data asli ( sebutan nya data example / data contoh )

    npx sequelize-cli model:generate --name Users --attributes username:string,password:string,email:string,firstname:string,lastname:string

    npx sequelize-cli db:migrate

    npx sequelize-cli seed:generate --name Users

    npx sequelize-cli seed:all
*/