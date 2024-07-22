/** Add your relevant code here for the issue to reproduce */
/**
 * Works: http://localhost:3000/proxy
 * Works: http://localhost:3000/proxy?test1=1
 * Works: http://localhost:3000/proxy?test1=1&test2=
 * Breaks: http://localhost:3000/proxy?test1=1&test2=&=
 */
export default function Home({ searchParams }) {
  return (
    <div>
      <h1>Hello World</h1>
      {JSON.stringify(searchParams)}
    </div>
  );
}
