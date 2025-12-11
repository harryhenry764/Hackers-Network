export type Tool = {
  id: string;
  name: string;
  platform: 'phone' | 'windows' | 'web' | 'linux';
  distro?: string; // for linux -> "kali" | "ubuntu" | "termux"
  section: string; // e.g., "persistence", "reverse-engineering"
  description?: string;
  url?: string;
};

const tools: Tool[] = [
  {
    id: 't-kali-nmap',
    name: 'Nmap',
    platform: 'linux',
    distro: 'kali',
    section: 'reconnaissance',
    description: 'Network scanner for host discovery and port scanning.',
    url: 'https://nmap.org/',
  },
  {
    id: 't-termux-metasploit',
    name: 'Metasploit (termux)',
    platform: 'phone',
    distro: 'termux',
    section: 'exploitation',
    description: 'Metasploit framework - mostly on Termux via special installs.',
    url: 'https://metasploit.com/',
  },
  {
    id: 't-windows-peframe',
    name: 'PEframe',
    platform: 'windows',
    section: 'reverse-engineering',
    description: 'Static analysis tool for PE files on Windows.',
    url: 'https://github.com/reverse-shell/peframe',
  },
  {
    id: 't-web-burpsuite',
    name: 'Burp Suite',
    platform: 'web',
    section: 'web-testing',
    description: 'Proxy and web vulnerability scanner.',
    url: 'https://portswigger.net/burp',
  },
  {
    id: 't-linux-foremost',
    name: 'Foremost',
    platform: 'linux',
    distro: 'ubuntu',
    section: 'forensics',
    description: 'File carving tool for data recovery/forensics',
    url: 'https://github.com/awgn/foremost',
  }
];

export default tools;
