// Untuk tugas buat contoh class Utama lalu buat class child yg diwariskan dari class Utama

// Buat class utama dg nama BangunDatar

// Class childnya 

// -segitiga
// -persegi
// -lingkaran


// Buat outputnya bisa menghitung luas, dan keliling bangun data

class Utama {
    constructor() {
        this.pjg = 10;
        this.lbr = 5;
        this.tgg = 5;
        this.jr = 10;
        this.als = 10;
        this.ss = 10;
    }
}

class HitungLsg3 extends Utama {
    hitungluasSg3() {
        return (this.als * this.tgg) / 2;
    }
}

class HitungLpsg extends Utama {
    hitungluasPsg() {
        return (this.ss * this.ss);
    }
}

class HitungKpsg extends Utama {
    hitungKllgPsg() {
        return (this.ss) * 4;
    }
}

class HitungLlnkr extends Utama {
    hitungluasLnkr() {
        return 22 * (this.jr * this.jr) / 7;
    }
}

class HitungKlkr extends Utama {
    hitungKllgLnkr() {
        return 2 * 22 * (this.jr) / 7;
    }
}

let br = ("<br>")

let luasPer3 = new HitungLsg3()
let luasPsg = new HitungLpsg()
let luasLnkr = new HitungLlnkr()

document.write("luas segitiga = " + luasPer3.hitungluasSg3() + br)
document.write("luas persegi = " + luasPsg.hitungluasPsg() + br)
document.write("luas lingkaran = " + luasLnkr.hitungluasLnkr() + br + br)


let kelilingPsg = new HitungKpsg()
let kelilingLnkr = new HitungKlkr()


document.write("keliling persegi = " + kelilingPsg.hitungKllgPsg() + br)
document.write("keliling lingkaran = " + kelilingLnkr.hitungKllgLnkr() + br)