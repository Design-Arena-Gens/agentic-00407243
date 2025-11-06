"use client";

import { useEffect, useRef, useState } from "react";

export default function CodeRunner({ mode = "js", initialCode = "", initialHtml = "", initialJs = "" }) {
  const iframeRef = useRef(null);
  const [code, setCode] = useState(initialCode);
  const [html, setHtml] = useState(initialHtml);
  const [js, setJs] = useState(initialJs);
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.data && e.data.__fromRunner) {
        setLogs((prev) => [...prev, e.data.payload]);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const runJS = () => {
    setRunning(true);
    setLogs([]);
    const iframe = iframeRef.current;
    if (!iframe) return;
    const escaped = code;
    const srcdoc = `<!doctype html><html><body><div id="out"></div><script>
      const send = (msg)=> parent.postMessage({__fromRunner:true, payload: String(msg)}, '*');
      ['log','warn','error','info'].forEach(fn=>{
        const o = console[fn].bind(console);
        console[fn] = (...args)=>{ o(...args); try{ send(args.map(String).join(' ')); }catch(_){} };
      });
      try { 
        const result = (function(){ ${escaped} })();
        if (result !== undefined) console.log(result);
      } catch (err) { console.error(err && err.stack ? err.stack : err); }
    <\/script></body></html>`;
    iframe.srcdoc = srcdoc;
    setTimeout(() => setRunning(false), 100);
  };

  const runAngular = () => {
    setRunning(true);
    setLogs([]);
    const iframe = iframeRef.current;
    if (!iframe) return;
    const srcdoc = `<!doctype html><html>
      <head>
        <meta charset="utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
      </head>
      <body>
        ${html}
        <script>
          try { ${js} } catch (err) {
            const send = (msg)=> parent.postMessage({__fromRunner:true, payload: String(msg)}, '*');
            send(err && err.stack ? err.stack : err);
          }
        <\/script>
      </body>
    </html>`;
    iframe.srcdoc = srcdoc;
    setTimeout(() => setRunning(false), 100);
  };

  return (
    <div className="space-y-3">
      {mode === "js" ? (
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Editor (JavaScript)</h4>
              <button className="btn btn-primary" onClick={runJS} disabled={running}>{running ? 'Running...' : 'Run'}</button>
            </div>
            <textarea className="w-full h-64 font-mono text-sm p-3 border rounded" value={code} onChange={(e)=>setCode(e.target.value)} />
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2">Output</h4>
            <iframe ref={iframeRef} className="w-full h-40 border rounded" sandbox="allow-scripts" />
            <div className="mt-3">
              <div className="text-xs text-gray-500 mb-1">Console</div>
              <div className="h-40 overflow-auto bg-gray-900 text-gray-100 rounded p-2 text-sm">
                {logs.length === 0 ? <div className="text-gray-400">(No logs yet)</div> : logs.map((l, i) => (
                  <div key={i} className="whitespace-pre-wrap">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="card space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">HTML</h4>
              <button className="btn btn-primary" onClick={runAngular} disabled={running}>{running ? 'Running...' : 'Run'}</button>
            </div>
            <textarea className="w-full h-40 font-mono text-sm p-3 border rounded" value={html} onChange={(e)=>setHtml(e.target.value)} />
            <div>
              <h4 className="font-semibold mb-2">JavaScript</h4>
              <textarea className="w-full h-40 font-mono text-sm p-3 border rounded" value={js} onChange={(e)=>setJs(e.target.value)} />
            </div>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2">Preview</h4>
            <iframe ref={iframeRef} className="w-full h-96 border rounded" sandbox="allow-scripts" />
            <div className="mt-3">
              <div className="text-xs text-gray-500 mb-1">Errors</div>
              <div className="h-24 overflow-auto bg-gray-900 text-gray-100 rounded p-2 text-sm">
                {logs.length === 0 ? <div className="text-gray-400">(No errors)</div> : logs.map((l, i) => (
                  <div key={i} className="whitespace-pre-wrap">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
