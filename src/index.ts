/**
 * A function to say hello to someone
 * @param {string} name
 *   The name to say hello to.
 * @return {string}
 *   A hello.
 */
export function sayHello(name: string): string {
  return `Hello ${name} !`;
}

console.log(sayHello("John"));
