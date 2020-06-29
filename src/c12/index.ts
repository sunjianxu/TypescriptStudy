console.warn('******泛型类*******');

class Logs<T> {
  run(value:T) {
    console.log(value)
  }
}
const logs = new Logs<number>();
logs.run(257);