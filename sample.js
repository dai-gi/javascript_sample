function count() {
    for (let num = "1"; num < 100; num = num + 1) {
        debugger;
        if (num == 5) {
            return;
        }
        console.log(num);
    }
}

count();
