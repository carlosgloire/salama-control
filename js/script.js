document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const maxCounts = [304, 132, 172];
    const intervals = [];

    function updateCounter(index, maxCount) {
        return function () {
            const currentValue = parseInt(counters[index].textContent);
            if (currentValue < maxCount) {
                counters[index].textContent = currentValue + 1;
            } else {
                clearInterval(intervals[index]);
            }
        };
    }

    counters.forEach((counter, index) => {
        intervals[index] = setInterval(updateCounter(index, maxCounts[index]), 10);
    });
});

