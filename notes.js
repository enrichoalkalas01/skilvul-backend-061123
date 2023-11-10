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

    ## Sebelumnya ##
    1. has create a auth controller ( register & login )
    2. has create a model & migration sequelize
    3. has input a data into database

    ## Lanjutan ##
    1. Create middleware auth ( body validation )
    2. Input middleware body validation into routes for filter
    3. Go to register controller and create process register and encrypt the password
    4. Problem if data exists ? filter data exists and stop created ( register )
    5. If data is not exists ? create data user and Done Register
    6. Go to login
    7. Check cryptr and jsonwebtoken is installed or not, if not just install it
    8. Get Data Matched from input request
    9. Descrypt password and matching password input
    10. If success, create token jwt


    ## Next Step ##
    1. Middleware JWT Verify
    2. Create filter authorization token detection
    3. Create filter token check jwt


    ## Setup Mongo ##
    1. Create Folder MongoDB pada folder models
    2. Create File Connection Mongo DB ( berfungsi untuk mengkonekan apps dengan database )
    3. Create Connection Mongo DB
    4. Use Connection Mongo DB in server.js

    - thumbnail
    - image_1
    - image_2
    - Link

    ## Cara Menambah Komentar Di Article ##
    1. Bikin API create komentar
        - controller komentar
        - models komentar
        - table / database komentar
        - process save each komentar di post ( save by id (page, kategory, post per id article, dll ) )
        - tampilin komentar by id ( bisa article, bisa page lainya )

    2. Get list komentar nya

    let dataPassingKomentarToDB = {
        userId: "",
        pageCategory: "article" / "post" / "product",
        pageCategoryId: "asd9a4laknd0idsn",
        komentar: "asldkansdlaksndalsnd",
        title: "wokwokwowkowk",
        created_date: "",
        update_date: "",
    }
*/