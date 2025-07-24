import React, { useState } from 'react';
import '../styles/Education.css';

const strainsData = [
  {
    name: '🌿 Pitbull',
    description:
      'Pitbull is a potent indica-dominant hybrid known for fast-acting relaxation. With fruity, piney aromas, it’s great for evening use and relieving stress or insomnia.',
  },
  {
    name: '🌿 Heli Jelly',
    description:
      'Heli Jelly is a vibrant sativa that boosts energy and creativity. It has a sweet berry profile and is perfect for daytime activities and social vibes.',
  },
  {
    name: '🌿 Dutch Magic',
    description:
      'Dutch Magic is a well-balanced hybrid combining uplifting and relaxing effects. Earthy and citrusy, ideal for mellow afternoons or social evenings.',
  },
  {
    name: '🌿 Money Grape',
    description:
      'Money Grape is a flavorful indica strain with sweet grape and earthy notes. Known for its calming high, it’s perfect for stress relief and winding down.',
  },
  {
    name: '🌿 Pop Tarts',
    description:
      'Pop Tarts is a hybrid strain with a delicious pastry-like aroma and balanced effects. Expect a euphoric uplift followed by mellow body relaxation.',
  },
  {
    name: '🌿 Purple Grape',
    description:
      'Purple Grape delivers a fruity punch with a strong indica effect. It’s relaxing, couch-locking, and great for insomnia and pain management.',
  },
  {
    name: '🌿 Loud Cake',
    description:
      'Loud Cake is a hybrid bursting with creamy sweetness and a loud diesel kick. It offers a euphoric head high followed by a deep calm.',
  },
  {
    name: '🌿 Dead Jack',
    description:
      'Dead Jack is a cross between Jack Herer and Deadhead OG, offering energetic cerebral effects with an earthy, piney taste. Great for focus and creativity.',
  },
  {
    name: '🌿 Rancouche',
    description:
      'Rancouche is an exotic, hard-hitting strain with a pungent fuel aroma. It delivers a heavy body high and a relaxing, stoney feel.',
  },
  {
    name: '🌿 Lava Cake',
    description:
      'Lava Cake is a dessert-like indica with chocolatey, minty flavors. It brings heavy relaxation and calm, perfect for nighttime use.',
  },
  {
    name: '🌿 Mimosa',
    description:
      'Mimosa is a citrusy sativa-dominant hybrid with energetic and uplifting effects. Great for morning use, it boosts mood and mental clarity.',
  },
  {
    name: '🌿 OG Kush',
    description:
      'OG Kush is a classic hybrid with earthy, pine aromas and a strong mental and physical high. It’s great for pain, stress, and appetite loss.',
  },
  {
    name: '🌿 Purple Haze',
    description:
      'Purple Haze is a psychedelic sativa strain made famous by Jimi Hendrix. It offers dreamy euphoria and creative stimulation with a berry twist.',
  },
  {
    name: '🌿 Cheese',
    description:
      'Cheese is a pungent hybrid known for its strong cheddar-like smell. It offers a relaxed, happy high ideal for stress relief and mood boost.',
  },
];

const Education = () => {
  const [openStrain, setOpenStrain] = useState(null);

  const toggleStrain = (index) => {
    setOpenStrain(openStrain === index ? null : index);
  };

  return (
    <main className="education-container" role="main">
      <header>
        <h1 className="education-title">Cannabis Education</h1>
        <p className="education-subtitle">
          Learn about cannabis, its uses, effects, and how to consume responsibly.
          Whether you're new or experienced, this page helps you make informed, mindful choices.
        </p>
      </header>

      <section aria-label="Educational Content">
        <article className="education-card">
          <h2>What is Cannabis?</h2>
          <p>
            Cannabis is a plant that contains compounds called cannabinoids—mainly THC and CBD.
            It's used for relaxation, pain relief, anxiety, and other therapeutic or recreational benefits.
          </p>
        </article>

        <article className="education-card">
          <h2>THC vs. CBD</h2>
          <p>
            <strong>THC</strong> is psychoactive and produces a "high" effect.
            <strong> CBD</strong> is non-psychoactive and promotes calmness and relief from inflammation, anxiety, and pain.
          </p>
        </article>

        <article className="education-card">
          <h2>Ways to Use Cannabis</h2>
          <p>
            You can smoke, vape, eat, or apply cannabis. Edibles take longer to kick in, while vaping and smoking work quickly.
            Each method affects the body differently.
          </p>
        </article>

        <article className="education-card">
          <h2>Responsible Use</h2>
          <p>
            Start low, go slow. Especially with edibles and new strains, it's important to begin with a small dose and wait before consuming more.
            Always follow local laws and avoid driving or operating machinery while under the influence.
          </p>
        </article>

        <article className="education-card">
          <h2>Is Cannabis Legal?</h2>
          <p>
            In South Africa, adults may use cannabis privately. However, commercial sale is restricted unless licensed.
            Always stay up to date with changing laws.
          </p>
        </article>

        <article className="education-card">
          <h2>Benefits of Cannabis</h2>
          <p>
            Cannabis may relieve pain, anxiety, stress, nausea, and insomnia. It's also being studied for epilepsy, PTSD, and chronic illness management.
          </p>
        </article>

        <article className="education-card">
          <h2>Risks and Side Effects</h2>
          <p>
            Cannabis can cause dry mouth, dizziness, impaired memory, anxiety, or paranoia—especially in high doses.
            Long-term overuse can affect motivation or focus.
          </p>
        </article>

        <article className="education-card">
          <h2>Different Cannabis Strains</h2>
          <p>
            <strong>Indica</strong> strains are relaxing and sedative—great for nighttime.
            <strong> Sativa</strong> strains are energizing and social.
            <strong> Hybrids</strong> combine traits of both.
          </p>
        </article>

        <article className="education-card">
          <h2>Terpenes and Their Effects</h2>
          <p>
            Terpenes give cannabis its flavor and scent.
            <strong> Limonene</strong> is citrusy and mood-boosting.
            <strong> Myrcene</strong> is calming.
            <strong> Pinene</strong> helps with alertness.
          </p>
        </article>

        <article className="education-card">
          <h2>Medical Use of Cannabis</h2>
          <p>
            Doctors may prescribe cannabis for pain, seizures, sleep disorders, and more.
            CBD-rich products are common for medical relief without the high.
          </p>
        </article>

        <article className="education-card">
          <h2>The Endocannabinoid System</h2>
          <p>
            This system in your body helps regulate sleep, appetite, mood, and memory.
            Cannabinoids like THC and CBD interact with it to create various effects.
          </p>
        </article>

        <article className="education-card strains-card">
          <h2>🌱 Our Strains</h2>
          {strainsData.map((strain, index) => (
            <div key={index} className="strain-section">
              <button
                className={`strain-toggle ${openStrain === index ? 'active' : ''}`}
                onClick={() => toggleStrain(index)}
              >
                {strain.name}
                <span className="arrow">{openStrain === index ? '✦' : '➤'}</span>
              </button>
              <div className={`strain-description ${openStrain === index ? 'open' : ''}`}>
                {strain.description}
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Education;
