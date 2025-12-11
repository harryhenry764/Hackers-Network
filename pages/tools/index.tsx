import { useMemo, useState } from 'react';
import toolsData, { Tool } from '../../data/tools';
import Link from 'next/link';

export default function ToolsIndex() {
  const [platformFilter, setPlatformFilter] = useState<'all'|'phone'|'windows'|'web'|'linux'>('all');
  const grouped = useMemo(() => {
    const list = toolsData.filter(t => platformFilter === 'all' ? true : t.platform === platformFilter);
    // group by section
    const map: Record<string, Tool[]> = {};
    list.forEach(t => {
      if (!map[t.section]) map[t.section] = [];
      map[t.section].push(t);
    });
    return map;
  }, [platformFilter]);

  return (
    <div className="container">
      <div className="card">
        <h2>Tools</h2>
        <p style={{color:'var(--muted)'}}>Filter by platform, then explore subsections.</p>

        <div style={{marginTop:12}} className="row">
          <select value={platformFilter} onChange={(e)=>setPlatformFilter(e.target.value as any)} style={{padding:8}}>
            <option value="all">All platforms</option>
            <option value="phone">Phone</option>
            <option value="windows">Windows</option>
            <option value="web">Web</option>
            <option value="linux">Linux</option>
          </select>
          <Link href="/tools/linux"><a className="button" style={{background:'#475569'}}>Linux view →</a></Link>
        </div>

        <div style={{marginTop:12}}>
          {Object.entries(grouped).map(([section, items]) => (
            <div key={section} style={{marginTop:12}}>
              <h4 style={{marginBottom:6}}>{section}</h4>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
                {items.map(i => (
                  <div key={i.id} className="card" style={{padding:12}}>
                    <strong>{i.name}</strong>
                    <div style={{color:'var(--muted)',fontSize:13}}>{i.description}</div>
                    <div style={{marginTop:8}} className="row">
                      <a href={i.url} target="_blank" rel="noreferrer" className="button" style={{background:'#3b82f6'}}>Visit</a>
                      <button className="button" style={{background:'#94a3b8'}}>Save</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
