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
*/