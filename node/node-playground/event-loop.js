var x = 0;

function increment(myNumber) {
  console.log(myNumber);
  myNumber++;
  return myNumber;
}

function tester(otherNum) {
  console.log(otherNum);
  otherNum--;
  return otherNum;
}

async function timer(seconds) {
  await new Promise((resolve) => {
    for (var i = 0; i > -seconds; i--) {
      // y = tester(y)
      console.log(i);
      setTimeout(resolve, seconds * 1000);
    }
  }) // wait 1 second
    .then(() => {
      console.log("timer done!", seconds);
    });
}

const firstStep = (number) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("first step");
      res(number + 1);
    }, 5000);
  });
};
const secondStep = (number) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("second step");
      res(number + 1);
    }, 1000);
  });
};

const doSteps = async () => {
  var x = 0;
  await firstStep(x).then((res) => {
    console.log("first step done", res);
    x = res;
  });
  secondStep(x).then((res) => {
    console.log("second step done", res);
    x = res;
  });
  console.log("Got x as: ", x);
};

doSteps()

// x = increment(x) // 0
// x = increment(x) // 1
// x = increment(x) // 2
// x = increment(x) // 3
// x = increment(x) // 4
// x = increment(x) // 5
// timer(10)
// x = increment(x) // 6
// x = increment(x) // 7
// x = increment(x) // 8
// x = increment(x) // 9
// x = increment(x) // 10
// timer(3)
// x = increment(x) // 11
// x = increment(x) // 12
// x = increment(x) // 13
// timer(3)
// x = increment(x) // 14
// x = increment(x) // 15
// x = increment(x) // 16
