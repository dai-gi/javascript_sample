function count() {
    for (let num = 1; num < 5; num = num + 1) {
        if (num == 3) {
            return;
        }
        console.log(num);
    }
}

count();
