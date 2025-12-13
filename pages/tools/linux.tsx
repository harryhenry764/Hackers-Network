import toolsData from '../../data/tools';
import Link from 'next/link';

export default function LinuxTools() {
  const linuxTools = toolsData.filter(t => t.platform === 'linux');

  // group by distro if present
  const byDistro: Record<string, typeof linuxTools> = {};
  linuxTools.forEach(t => {
    const d = t.distro || 'general';
    if (!byDistro[d]) byDistro[d] = [];
    byDistro[d].push(t);
  });

  return (
    <div className="container">
      <div className="card">
        <h2>Linux — distros</h2>
        <p style={{color:'var(--muted)'}}>Kali, Ubuntu, Termux and more. Pick a distro for tools and install notes.</p>
        <div style={{marginTop:12}} className="row">
          <Link href="/tools"><a className="button" style={{background:'#94a3b8'}}>Back to all tools</a></Link>
        </div>

        <div style={{marginTop:12}}>
          {Object.entries(byDistro).map(([distro, items]) => (
            <div key={distro} style={{marginTop:12}}>
              <h3 style={{textTransform:'capitalize'}}>{distro}</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
                {items.map(t => (
                  <div key={t.id} className="card" style={{padding:12}}>
                    <strong>{t.name}</strong>
                    <div style={{color:'var(--muted)'}}>{t.section}</div>
                    <div style={{marginTop:8}} className="row">
                      <a href={t.url} target="_blank" rel="noreferrer" className="button">Visit</a>
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

