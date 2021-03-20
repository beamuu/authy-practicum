function hash(stringy) {
    console.log(stringy);
    document.getElementById("output").innerHTML = hex_sha256(stringy);
}