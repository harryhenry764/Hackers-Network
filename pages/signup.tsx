import { useState } from 'react';
import { useRouter } from 'next/router';
import { setUserSession } from '../utils/session';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(false);

  function submit(e: any) {
    e.preventDefault();
    if (!name) return alert('Enter a display name');
    if (!agree) return alert('You must agree to the terms for an ethical hackers community.');
    // Simple client-only "signup" for prototype. Replace with real auth later.
    setUserSession({ name, createdAt: Date.now(), anon: false });
    router.push('/onboarding');
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Create a profile</h2>
        <form onSubmit={submit} style={{display:'grid',gap:12,marginTop:12}}>
          <label>
            Display name
            <input value={name} onChange={(e)=>setName(e.target.value)} style={{width:'100%',padding:8,marginTop:6,borderRadius:6}} />
          </label>

          <label style={{color:'var(--muted)'}}>
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} /> I agree to act ethically and follow the community rules.
          </label>

          <div className="row">
            <button className="button" type="submit">Create profile</button>
            <button className="button" type="button" onClick={()=>router.push('/') } style={{background:'#ccc',color:'#000'}}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
