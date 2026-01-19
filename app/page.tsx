'use client';

export default function Page() {
  const paw = '🐾';
  
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: '#333', background: '#ffffff' }}>
      {/* Logo Placeholder */}
      <section style={{
        background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
        padding: '0',
        margin: '0',
        textAlign: 'center',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>
        <img 
          src="https://i.imgur.com/nc33SJ9.png"
          alt="Fat Calico Logo"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '150px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </section>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 50%, #000 100%)',
        color: 'white',
        padding: '25px 20px',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        
        <h1 style={{
          fontSize: 'clamp(32px, 8vw, 64px)',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 1
        }}>
          STOP RENTING
        </h1>
        <h1 style={{
          fontSize: 'clamp(32px, 8vw, 64px)',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          margin: '0 0 40px 0',
          letterSpacing: '2px',
          color: 'white',
          position: 'relative',
          zIndex: 1
        }}>
          START OWNING
        </h1>
        
        <p style={{
          fontSize: 'clamp(16px, 3.5vw, 18px)',
          fontFamily: 'Arvo, serif',
          maxWidth: '600px',
          margin: '0 auto',
          opacity: '0.95',
          lineHeight: '1.7',
          position: 'relative',
          zIndex: 1
        }}>
          They need to know YOU within one click.
          <br />
          <br />
          Not your feed. Not your last 20 posts. YOU.
          <br />
          Your niche, your offer, your value.
        </p>
      </section>

      {/* Problems Section */}
      <section style={{
        background: 'white',
        padding: '50px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 6vw, 48px)',
          fontFamily: 'Oswald, sans-serif',
          textAlign: 'center',
          marginBottom: '15px',
          color: '#000',
          letterSpacing: '1px'
        }}>
          THE SOCIAL MEDIA TRAP
        </h2>
        
        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          fontFamily: 'Arvo, serif',
          textAlign: 'center',
          marginBottom: '45px',
          color: '#666'
        }}>
          Great for your audience, terrible for your business.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {[
            { 
              title: 'The Algorithm Trap', 
              desc: 'The algorithm decides if your work gets seen. If it says no, you\'re invisible to potential clients.'
            },
            { 
              title: 'The Distraction Factory', 
              desc: 'Surrounded by competitors and suggested content. Your work gets lost in the noise.'
            },
            { 
              title: 'The Chronological Curse', 
              desc: 'Your best work from 2 months ago is dead. Buried under 30 new posts.'
            },
            { 
              title: 'The Identity Blur', 
              desc: 'Personal content mixed with professional. Clients can\'t see your real niche.'
            },
            { 
              title: 'The Friction of "The Dig"', 
              desc: 'Clients won\'t scroll and hunt for you. Most will just leave.'
            },
            { 
              title: 'The "Hobbyist" Signal', 
              desc: 'No portfolio = hobby vibes. Serious clients want serious infrastructure.'
            },
            { 
              title: 'The Social Paradox', 
              desc: '2,000 followers looks small on Instagram. On your website? You\'re a Creative Specialist.'
            },
            { 
              title: 'The Dead-End Journey', 
              desc: 'Apps show competitors right on your page. What makes you better than them?'
            },
            { 
              title: 'The Style Guessing Game', 
              desc: 'Mixed vibes = client confusion. They won\'t risk hiring you if they can\'t tell your range.'
            },
            { 
              title: 'The One-Hit-Wonder Machine', 
              desc: 'The algorithm judges by likes, not quality. Your masterpiece gets buried.'
            }
          ].map((problem, idx) => (
            <div key={idx} style={{
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid rgba(255, 140, 0, 0.2)',
              borderLeft: '5px solid #FF8C00',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 140, 0, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.2)';
            }}>
              <h3 style={{
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                fontFamily: 'Oswald, sans-serif',
                marginBottom: '10px',
                color: '#000',
                margin: '0 0 10px 0'
              }}>
                {problem.title}
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.2vw, 14px)',
                fontFamily: 'Arvo, serif',
                color: '#666',
                margin: '0',
                lineHeight: '1.5'
              }}>
                <span style={{ marginRight: '8px' }}>🐾</span>
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
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontFamily: 'Oswald, sans-serif',
          marginBottom: '15px',
          letterSpacing: '1px',
          margin: '0 0 15px 0'
        }}>
          You Don't Need More Followers
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          fontFamily: 'Arvo, serif',
          maxWidth: '700px',
          margin: '0 auto',
          opacity: '0.95',
          lineHeight: '1.6'
        }}>
          You need a better system. Stop letting a 48-hour algorithm dictate your worth. It's time to own your professional home.
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
          marginBottom: '15px',
          color: '#000',
          letterSpacing: '1px'
        }}>
          YOUR TALENT, CURATED & OWNED
        </h2>
        
        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          fontFamily: 'Arvo, serif',
          textAlign: 'center',
          marginBottom: '45px',
          color: '#666',
          maxWidth: '900px',
          margin: '0 auto 45px',
          lineHeight: '1.6'
        }}>
          A clean, high-performance portfolio that categorizes your niche and puts your best work front-and-center. Clients will instantly get what you bring to the table.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {[
            { 
              title: 'Permanent Visibility',
              desc: 'Your best work stays exactly where you put it. No buried posts, no chronological curse.',
              points: [
                'Your best work stays visible',
                'No buried posts or dead links',
                'Made today or made a year ago, it\'s always there'
              ]
            },
            { 
              title: 'Niche Categorized Navigation',
              desc: 'Stop making clients guess. Organize by niche so they see your range instantly.',
              points: [
                'Stop making clients guess',
                'Organize your work by niche',
                'Brand managers vet your range in seconds'
              ]
            },
            { 
              title: '"Creative Specialist" Status',
              desc: 'Your own professional URL signals you\'re serious, not a hobbyist.',
              points: [
                'Portfolio on your own URL',
                'yourname.vercel.app or yourname.com',
                'Instant professional credibility'
              ]
            },
            { 
              title: 'Zero Distraction Environment',
              desc: 'Clean, high-performance space. Just you and your value. No competitors, no noise.',
              points: [
                'Clean, high-performance space',
                'No ads, no competitors, no distractions',
                'Just YOU and your work'
              ]
            },
            { 
              title: 'Mobile Optimized',
              desc: 'More users are on mobile. Your simple site beats a messy social feed.',
              points: [
                'More users are on mobile than ever',
                'Social feeds are too messy',
                'Your site makes finding you instant'
              ]
            },
            { 
              title: 'Own Your Domain',
              desc: 'Stop renting from tech giants. Your link, your rules, forever.',
              points: [
                'Stop renting, start owning',
                'Your link, your rules, forever',
                'The only metric is work quality'
              ]
            }
          ].map((solution, idx) => (
            <div key={idx} style={{
              background: '#f9f9f9',
              padding: '25px',
              borderRadius: '8px',
              border: '2px solid rgba(255, 140, 0, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 140, 0, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.3)';
            }}>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontFamily: 'Oswald, sans-serif',
                marginBottom: '10px',
                color: '#FF8C00',
                margin: '0 0 10px 0'
              }}>
                {solution.title}
              </h3>
              
              <p style={{
                fontSize: 'clamp(13px, 2.2vw, 14px)',
                fontFamily: 'Arvo, serif',
                color: '#666',
                marginBottom: '15px',
                lineHeight: '1.5',
                margin: '0 0 15px 0'
              }}>
                {solution.desc}
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {solution.points.map((point, pidx) => (
                  <li key={pidx} style={{
                    fontSize: 'clamp(13px, 2.2vw, 14px)',
                    fontFamily: 'Arvo, serif',
                    marginBottom: '8px',
                    color: '#666',
                    paddingLeft: '20px',
                    position: 'relative',
                    lineHeight: '1.4'
                  }}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '16px' }}>🐾</span>
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
        background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #FF8C00 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{
          fontSize: 'clamp(48px, 10vw, 80px)',
          fontFamily: 'Oswald, sans-serif',
          marginBottom: '15px',
          letterSpacing: '2px',
          textShadow: '0 0 30px rgba(255, 140, 0, 0.5)',
          position: 'relative',
          zIndex: 1,
          margin: '0 0 15px 0'
        }}>
          RM 100
        </h2>
        
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          fontFamily: 'Arvo, serif',
          marginBottom: '40px',
          color: '#FFB90F',
          position: 'relative',
          zIndex: 1
        }}>
          Once. That's it. No monthly fees. No subscriptions.
        </p>

        <div style={{
          background: 'rgba(255, 140, 0, 0.1)',
          border: '2px solid rgba(255, 140, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            textAlign: 'left'
          }}>
            {[
              'One single page portfolio website',
              'Free domain (yourname.vercel.app)',
              'Free coding service',
              'Free website template',
              'Free one major revision',
              'Free two minor revisions'
            ].map((item, idx) => (
              <li key={idx} style={{
                fontSize: 'clamp(14px, 2.3vw, 15px)',
                fontFamily: 'Arvo, serif',
                marginBottom: '10px',
                paddingLeft: '25px',
                position: 'relative'
              }}>
                <span style={{ position: 'absolute', left: '0', fontSize: '18px' }}>🐾</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p style={{
          fontSize: 'clamp(13px, 2.3vw, 14px)',
          fontFamily: 'Arvo, serif',
          marginBottom: '40px',
          opacity: '0.9',
          lineHeight: '1.6',
          position: 'relative',
          zIndex: 1
        }}>
          That's only RM 8.30 per month and RM 0.27 a day to look professional!
        </p>

        <a href="mailto:fatcalico@gmail.com?subject=Let's Build My Portfolio Website" style={{
          background: 'linear-gradient(135deg, #FF8C00, #FFB90F)',
          color: '#000',
          padding: '16px 40px',
          fontSize: 'clamp(15px, 2.5vw, 16px)',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          letterSpacing: '1px',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 8px 30px rgba(255, 140, 0, 0.3)',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 15px 45px rgba(255, 140, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 140, 0, 0.3)';
        }}>
          {paw} Start Owning Your Portfolio
        </a>

        <p style={{
          fontSize: 'clamp(13px, 2.3vw, 14px)',
          fontFamily: 'Arvo, serif',
          marginTop: '40px',
          opacity: '0.85',
          maxWidth: '700px',
          margin: '40px auto 0',
          lineHeight: '1.6',
          position: 'relative',
          zIndex: 1
        }}>
          Stop being just another creator profile. Start being the portfolio they can't ignore.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#000',
        color: '#666',
        padding: '30px 20px',
        textAlign: 'center',
        fontSize: 'clamp(12px, 2vw, 13px)',
        fontFamily: 'Arvo, serif'
      }}>
        <p style={{ margin: '0' }}>Made by Fat Calico {paw}</p>
      </footer>
    </div>
  );
}
