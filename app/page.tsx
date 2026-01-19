export default function Page() {
  const paw = '🐾';
  
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: '#333' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 50%, #000 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23F5DEB3'/%3E%3Ccircle cx='70' cy='80' r='25' fill='%23FF8C00'/%3E%3Ccircle cx='130' cy='80' r='25' fill='%23000'/%3E%3Cpath d='M 85 75 Q 90 70 95 75' stroke='%23000' strokeWidth='2' fill='none'/%3E%3Cpath d='M 105 75 Q 110 70 115 75' stroke='%23000' strokeWidth='2' fill='none'/%3E%3Cpath d='M 100 105 Q 100 115 95 120' stroke='%23000' strokeWidth='2' fill='none'/%3E%3Cpath d='M 100 105 Q 100 115 105 120' stroke='%23000' strokeWidth='2' fill='none'/%3E%3C/svg%3E" 
            alt="Fat Calico Logo" 
            style={{ width: '120px', height: '120px', marginBottom: '20px' }}
          />
        </div>
        
        <h1 style={{
          fontSize: 'clamp(32px, 8vw, 64px)',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          margin: '20px 0',
          letterSpacing: '2px'
        }}>
          STOP RENTING
        </h1>
        <h1 style={{
          fontSize: 'clamp(32px, 8vw, 64px)',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          margin: '0 0 30px 0',
          letterSpacing: '2px'
        }}>
          START OWNING
        </h1>
        
        <p style={{
          fontSize: 'clamp(16px, 4vw, 20px)',
          fontFamily: 'Arvo, serif',
          maxWidth: '600px',
          margin: '30px auto',
          opacity: '0.95'
        }}>
          Your talent deserves better than a social media algorithm. Get your professional portfolio website in one click.
        </p>
      </section>

      {/* Problems Section */}
      <section style={{
        background: 'white',
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 6vw, 48px)',
          fontFamily: 'Oswald, sans-serif',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#FF8C00'
        }}>
          THE SOCIAL MEDIA TRAP
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {[
            { title: 'The Algorithm Trap', desc: 'The algorithm decides if your work gets seen. If it says no, you\'re invisible.' },
            { title: 'The Distraction Factory', desc: 'Competitors and suggested content everywhere. Your work gets lost in the noise.' },
            { title: 'The Chronological Curse', desc: 'Your best work from 2 months ago? Dead and buried under 30 new posts.' },
            { title: 'The Identity Blur', desc: 'Personal content mixed with professional. Clients can\'t see your real niche.' },
            { title: 'The Friction of "The Dig"', desc: 'Expecting clients to scroll and hunt for you. Most won\'t. They\'ll just leave.' },
            { title: 'The "Hobbyist" Signal', desc: 'No portfolio = hobby vibes. Serious clients want serious infrastructure.' },
            { title: 'The Social Paradox', desc: '2,000 followers looks small on Instagram. But on your website? You\'re a specialist.' },
            { title: 'The Dead-End Journey', desc: 'Social apps keep people on the app. They show competitors right on your page.' },
            { title: 'The Style Guessing Game', desc: 'Mixed vibes = client confusion. They won\'t risk hiring you if they can\'t tell your range.' },
            { title: 'The One-Hit-Wonder Machine', desc: 'Great content gets buried. The algorithm judges by likes, not quality.' }
          ].map((problem, idx) => (
            <div key={idx} style={{
              background: '#f9f9f9',
              padding: '25px',
              borderRadius: '8px',
              borderLeft: '4px solid #FF8C00'
            }}>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontFamily: 'Oswald, sans-serif',
                marginBottom: '12px',
                color: '#000'
              }}>
                {paw} {problem.title}
              </h3>
              <p style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontFamily: 'Arvo, serif',
                color: '#666'
              }}>
                {problem.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Transition Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 42px)',
          fontFamily: 'Oswald, sans-serif',
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>
          YOU DON'T NEED MORE FOLLOWERS
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 24px)',
          fontFamily: 'Arvo, serif',
          marginBottom: '20px',
          maxWidth: '800px',
          margin: '20px auto'
        }}>
          You need a better system.
        </p>
        <p style={{
          fontSize: 'clamp(16px, 3.5vw, 20px)',
          fontFamily: 'Arvo, serif',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: '0.95'
        }}>
          Stop letting a 48-hour algorithm dictate your worth. It's time to stop renting on social media and start owning your professional home.
        </p>
      </section>

      {/* Solutions Section */}
      <section style={{
        background: 'white',
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 6vw, 48px)',
          fontFamily: 'Oswald, sans-serif',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#000'
        }}>
          YOUR TALENT, CURATED & OWNED
        </h2>
        
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          fontFamily: 'Arvo, serif',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#666',
          maxWidth: '900px',
          margin: '0 auto 50px'
        }}>
          A clean, high-performance portfolio website that categorizes your niche and puts your top-tier work front-and-center. Every client will instantly get what you bring to the table.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {[
            { 
              title: 'Permanent Visibility',
              points: [
                'Your best work stays exactly where you put it',
                'No buried posts, no chronological curse',
                'Made today or made a year ago, it\'s always there'
              ]
            },
            { 
              title: 'Niche Categorized Navigation',
              points: [
                'Stop making clients guess',
                'Organize your work by niche',
                'Brand managers vet your range in seconds'
              ]
            },
            { 
              title: '"Creative Specialist" Status',
              points: [
                'Portfolio on your own professional URL',
                'yourname.vercel.app or yourname.com',
                'You instantly look like a proper professional'
              ]
            },
            { 
              title: 'Zero Distraction Environment',
              points: [
                'Clean, high-performance space',
                'No ads, no competitors, no noise',
                'Just you and your value'
              ]
            },
            { 
              title: 'Mobile Optimized',
              points: [
                'More users are on mobile than ever',
                'Social feeds are messy to screen',
                'Your site makes finding you instant'
              ]
            },
            { 
              title: 'Own Your Domain',
              points: [
                'Stop renting from tech giants',
                'Your link, your rules, forever',
                'The only metric is your work quality'
              ]
            }
          ].map((solution, idx) => (
            <div key={idx} style={{
              background: '#f9f9f9',
              padding: '30px',
              borderRadius: '8px',
              border: '2px solid #FF8C00'
            }}>
              <h3 style={{
                fontSize: 'clamp(18px, 3.5vw, 20px)',
                fontFamily: 'Oswald, sans-serif',
                marginBottom: '20px',
                color: '#FF8C00'
              }}>
                {paw} {solution.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {solution.points.map((point, pidx) => (
                  <li key={pidx} style={{
                    fontSize: 'clamp(14px, 2.5vw, 15px)',
                    fontFamily: 'Arvo, serif',
                    marginBottom: '10px',
                    color: '#666',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: '0' }}>🐾</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section style={{
        background: 'linear-gradient(135deg, #000 0%, #333 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(36px, 8vw, 72px)',
          fontFamily: 'Oswald, sans-serif',
          marginBottom: '30px',
          letterSpacing: '2px'
        }}>
          RM 100
        </h2>
        
        <p style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          fontFamily: 'Arvo, serif',
          marginBottom: '30px',
          color: '#FF8C00'
        }}>
          Once. That's it. No monthly fees. No subscriptions.
        </p>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          backdropFilter: 'blur(10px)'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            textAlign: 'left'
          }}>
            {[
              'One single-page portfolio website',
              'Free domain (yourname.vercel.app)',
              'Free coding service',
              'Free website template',
              'Free one major revision',
              'Free two minor revisions'
            ].map((item, idx) => (
              <li key={idx} style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontFamily: 'Arvo, serif',
                marginBottom: '12px',
                paddingLeft: '25px',
                position: 'relative'
              }}>
                <span style={{ position: 'absolute', left: '0' }}>🐾</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          fontFamily: 'Arvo, serif',
          marginBottom: '50px',
          opacity: '0.9'
        }}>
          That's only RM 8.30 per month and RM 0.27 a day to look professional and presentable!
        </p>

        <a href="mailto:fatcalico@gmail.com?subject=Let's Build My Portfolio Website" style={{
          background: '#FF8C00',
          color: 'white',
          padding: '18px 40px',
          fontSize: 'clamp(16px, 3vw, 18px)',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(255, 140, 0, 0.4)'
        }} 
        onMouseEnter={(e) => {
          e.target.style.background = '#FFA500';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(255, 140, 0, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#FF8C00';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(255, 140, 0, 0.4)';
        }}>
          {paw} START OWNING YOUR PORTFOLIO
        </a>

        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          fontFamily: 'Arvo, serif',
          marginTop: '30px',
          opacity: '0.8',
          maxWidth: '700px',
          margin: '30px auto 0'
        }}>
          Stop being just another creator profile on social media. Start being the portfolio they can't ignore.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#000',
        color: '#999',
        padding: '30px 20px',
        textAlign: 'center',
        fontSize: 'clamp(12px, 2vw, 14px)',
        fontFamily: 'Arvo, serif'
      }}>
        <p>Made by Fat Calico {paw} fatcalico@gmail.com</p>
      </footer>
    </div>
  );
}
