function khodamChecker() {
    let input = document.getElementById("nama").value;
    if (input != "") {

        function getArray(arr) {
            const index = Math.floor(Math.random() * arr.length);
            return arr[index];
        }
        const khodam = [
            "Anomali Jawa",
            "Anomali Sunda",
            "Anomali Batak",
            "Avanza Salat",
            "Anggrek Pontianak",
            "Atmin Diskord",
            "Bocil Alok",
            "Bocil Kripto",
            "Basuri Hunter",
            "Bakso Tikus",
            "Black Polres",
            "Bokong Thanos",
            "Birahi Megalodon",
            "Biji Ganjil",
            "Balap Kerudung",
            "Curut Ngeteh",
            "Dewa Satir",
            "Eceng Gondok",
            "Gelas Turu",
            "Hihang Hoheng",
            "Itel Negro",
            "Innova 2GB",
            "Icad Studio",
            "JMK 48",
            "Kampus UNIGA",
            "Kampret Bakar",
            "Kadal Tobroot",
            "Ketua BIBD",
            "Ketua Khodam Checker",
            "Kapal Karam",
            "Kelinci Perconaan",
            "Kulkas LG",
            "Kurban Portable",
            "Kecupat Cayul",
            "KRI Nanggala",
            "Kodok Ngaceng",
            "Knalpot ZX",
            "Keran Masjid",
            "Lempeng Tektonik",
            "Lohan Buncit",
            "Momoi Pargoy",
            "M.M.E.K.",
            "Mewing 4K",
            "Nazi Rendang",
            "Prett Chimkin",
            "Pentil Asus",
            "Peter Parkir",
            "Piston Jebol",
            "Peri Payer",
            "Raja Iblis",
            "Rudal Kratos",
            "Rehan Wangsaff",
            "Rusdi Ngawi",
            "Rizzky Bogor",
            "Sendok Jamsut",
            "Sushi Baka",
            "Silvia Slebew",
            "Samsul Galaksih",
            "Saudi RS6",
            "Sedot WC",
            "Sapu Jagat",
            "Sabun SNBT",
            "Singa Merah",
            "Spion Supra",
            "Tempe Mualaf",
            "Ujang Sigma",
            "USS Gyatt",
            "Vamos Pablo",
            "Wagyu SUKI",
            "Windah Batubara",
        ];
        const value = getArray(khodam);
        document.getElementById("hasil").innerText = value;
        
        const nama1 = document.getElementById("nama");
        nama1.disabled = true;

        const onlyOnce = document.getElementById("check");
        onlyOnce.disabled = true;
        onlyOnce.style.opacity = "0.5";

        const retryCheck = document.getElementById("reload");
        retryCheck.style.color = "white";
    }
}