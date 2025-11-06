export const jsLessons = [
  {
    slug: "variables-and-types",
    title: "Variables, Types, and let/const",
    summary: "Meet let/const, numbers, strings, booleans, and typeof.",
    level: "Beginner",
    time: 10,
    html: `
      <p>JavaScript has dynamic types. Use <code>let</code> for re-assignable variables and <code>const</code> for values that won't be reassigned.</p>
      <ul>
        <li><code>number</code>, <code>string</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>object</code>, <code>symbol</code>, <code>bigint</code></li>
      </ul>
      <p>Tip: Prefer <code>const</code> by default; use <code>let</code> when you must reassign.</p>
    `,
    code: `// Try changing values and re-running
const name = "Ada";
let count = 2;
count += 3;

console.log(typeof name, name);
console.log(typeof count, count);
`,
    quiz: [
      {
        q: "Which keyword prevents reassignment?",
        choices: ["var", "let", "const"],
        answer: 2
      },
      {
        q: "typeof null is...",
        choices: ["null", "object", "undefined"],
        answer: 1
      }
    ]
  },
  {
    slug: "functions-and-arrows",
    title: "Functions and Arrow Functions",
    summary: "Write concise functions with ES6 arrows.",
    level: "Beginner",
    time: 10,
    html: `
      <p>Arrow functions are shorter and capture <code>this</code> from their lexical scope.</p>
      <p>Use parentheses for multiple params, and implicit return for single expressions.</p>
    `,
    code: `const add = (a, b) => a + b;
const greet = name => ` + "`Hello, ${name}!`" + `;

console.log(add(2,3));
console.log(greet("Ada"));
`,
    quiz: [
      {
        q: "Arrow functions capture which 'this'?",
        choices: ["dynamic", "lexical", "global"],
        answer: 1
      }
    ]
  },
  {
    slug: "template-literals",
    title: "Template Literals",
    summary: "String interpolation with backticks and expressions.",
    level: "Beginner",
    time: 8,
    html: `
      <p>Template literals use backticks and <code>${'{}'}</code> for interpolation, spanning multiple lines.</p>
    `,
    code: "const user = { first: 'Ada', last: 'Lovelace' };\nconst msg = `Hello ${user.first} ${user.last}!`;\nconsole.log(msg);\n",
    quiz: [
      { q: "Which quotes do template literals use?", choices: ["'single'", '"double"', "`backticks`"], answer: 2 }
    ]
  },
  {
    slug: "destructuring-and-spread",
    title: "Destructuring, Rest, and Spread",
    summary: "Pull values out and merge easily.",
    level: "Intermediate",
    time: 12,
    html: `
      <p>Destructure arrays/objects; use spread <code>...</code> to copy/merge; rest <code>...</code> to gather.</p>
    `,
    code: `const user = { id: 1, name: "Ada", role: "admin" };
const { name, ...rest } = user;
const more = { active: true, ...user };
console.log(name, rest, more);

const xs = [1,2,3];
const ys = [...xs, 4,5];
const [first, ...others] = ys;
console.log(first, others);
`,
    quiz: [
      { q: "Spread '...' does what?", choices: ["gathers values", "expands values", "multiplies"], answer: 1 }
    ]
  },
  {
    slug: "arrays-map-filter-reduce",
    title: "Arrays: map, filter, reduce",
    summary: "Transform, select, and fold arrays like a pro.",
    level: "Intermediate",
    time: 15,
    html: `
      <p><code>map</code> transforms, <code>filter</code> selects, <code>reduce</code> folds a list into one value.</p>
    `,
    code: `const nums = [1,2,3,4,5];
const doubled = nums.map(n => n*2);
const evens = doubled.filter(n => n % 2 === 0);
const sum = evens.reduce((a,b) => a + b, 0);
console.log({ doubled, evens, sum });
`,
    quiz: [
      { q: "Which returns a single value?", choices: ["map", "filter", "reduce"], answer: 2 }
    ]
  },
  {
    slug: "promises-and-async-await",
    title: "Promises and async/await",
    summary: "Write async code without callback pyramids.",
    level: "Intermediate",
    time: 15,
    html: `
      <p>Promises represent future values. <code>async/await</code> makes them read like sync code.</p>
    `,
    code: `const wait = ms => new Promise(res => setTimeout(res, ms));

async function demo() {
  console.log('Start');
  await wait(300);
  console.log('After 300ms');
}

demo();
`,
    quiz: [
      { q: "What keyword pauses inside async?", choices: ["pause", "await", "yield"], answer: 1 }
    ]
  }
];
