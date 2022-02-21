// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

/*
const fn =(num) => {
  return new Promise((resolve, reject) => {
    if(num == 10) resolve() // return true
    else reject(false)
  })
}


fn(11).then().catch()

async function fn() {
  try{
    const data = await fn(10)
  }
  catch(err) {
    console.log(err) // false
  }
}
*/
