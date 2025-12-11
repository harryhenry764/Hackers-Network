import { useState } from 'react';
import { useRouter } from 'next/router';
import { saveOnboarding } from '../utils/session';

export default function Onboarding() {
  const router = useRouter();
  const [experience, setExperience] = useState<'beginner'|'intermediate'|'advanced'>('beginner');
  const [resources, setResources] = useState<{phone:boolean,pc:boolean,lab:boolean}>({phone:false,pc:false,lab:false});

  function toggle(k: keyof typeof resources) {
    setResources(prev => ({...prev, [k]: !prev[k]}));
  }

  function next() {
    saveOnboarding({ experience, resources });
    router.push('/tools');
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Quick onboarding</h2>
        <p style={{color:'var(--muted)'}}>Tell us about your experience and what resources you have.</p>

        <div style={{marginTop:12}}>
          <label>Experience</label>
          <select value={experience} onChange={(e)=>setExperience(e.target.value as any)} style={{display:'block',padding:8,marginTop:6}}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div style={{marginTop:12}}>
          <label>Resources</label>
          <div className="row" style={{marginTop:8}}>
            <label style={{color:'var(--muted)'}}><input type="checkbox" checked={resources.phone} onChange={()=>toggle('phone')} /> Phone</label>
            <label style={{color:'var(--muted)'}}><input type="checkbox" checked={resources.pc} onChange={()=>toggle('pc')} /> PC</label>
            <label style={{color:'var(--muted)'}}><input type="checkbox" checked={resources.lab} onChange={()=>toggle('lab')} /> Hacking lab</label>
          </div>
        </div>

        <div style={{marginTop:18}} className="row">
          <button className="button" onClick={next}>Continue to tools</button>
        </div>
      </div>
    </div>
  );
}
