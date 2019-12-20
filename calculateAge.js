function calculateAge() {
    let birthDate = document.getElementById('fbirthdate').value;
    let birthMonth = document.getElementById('fbirthmonth').value;
    let birthYear = document.getElementById('fbirthyear').value;
    let year = 2019 - Number(birthYear);
    let bulan = Number(birthMonth) + (12 * year);
    let hari = Number(birthDate) + (bulan * 30);
    let jam = Number(hari) * 24;
    let menit = Number(jam) * 60;
    let detik = Number(menit) * 60;

    if (birthDate <= 0 || birthMonth <= 0 || birthYear <= 0 || birthDate > 31 || birthMonth > 12 || birthYear > 2019) {
        if (birthDate <= 0 || birthDate > 31) {
            document.getElementById('outputsecond').innerText = 'Please insert date correctly';
            document.getElementById('outputminute').innerText = 'Please insert date correctly';
            document.getElementById('outputhour').innerText = 'Please insert date correctly';
            document.getElementById('outputdate').innerText = 'Please insert date correctly';
            document.getElementById('outputmonth').innerText = 'Please insert date correctly';
            document.getElementById('outputyear').innerText = 'Please insert date correctly';
        } else if (birthMonth <= 0 || birthMonth > 12) {
            document.getElementById('outputsecond').innerText = 'Please insert month correctly';
            document.getElementById('outputminute').innerText = 'Please insert month correctly';
            document.getElementById('outputhour').innerText = 'Please insert month correctly';
            document.getElementById('outputdate').innerText = 'Please insert month correctly';
            document.getElementById('outputmonth').innerText = 'Please insert month correctly';
            document.getElementById('outputyear').innerText = 'Please insert month correctly';
        } else if (birthYear <= 0 || birthYear > 2019) {
            document.getElementById('outputsecond').innerText = 'Please insert year correctly';
            document.getElementById('outputminute').innerText = 'Please insert year correctly';
            document.getElementById('outputhour').innerText = 'Please insert year correctly';
            document.getElementById('outputdate').innerText = 'Please insert year correctly';
            document.getElementById('outputmonth').innerText = 'Please insert year correctly';
            document.getElementById('outputyear').innerText = 'Please insert year correctly';
        }
    } else {
        document.getElementById('outputsecond').innerText = `You've lived for ${detik} seconds`;
        document.getElementById('outputminute').innerText = `You've lived for ${menit} minutes`;
        document.getElementById('outputhour').innerText = `You've lived for ${jam} hours`;
        document.getElementById('outputdate').innerText = `You've lived for ${hari} days`;
        document.getElementById('outputmonth').innerText = `You've lived for ${bulan} months`;
        document.getElementById('outputyear').innerText = `You've lived for ${year} years`;
    }
}