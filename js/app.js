// Wedding invitation controller extracted from the original file.
    (function() {
      // 1. THEME DEFINITIONS (11 PALETTES)
      const THEMES = [
        {
          id: "royal-black",
          name: "Black & Antique Gold",
          mood: "Imperial obsidian luxury with raw 24k bullion gold accents",
          isDark: true,
          swatchPrimary: "#0e0c0a",
          swatchSecondary: "#d4af37",
          vars: {
            "--bg-base": "#0e0c0a",
            "--card-bg": "#181513",
            "--card-surface": "#231f1c",
            "--card-highlight": "#2e2924",
            "--accent-gold": "#d4af37",
            "--accent-subtle": "#917625",
            "--text-primary": "#f5ecd5",
            "--text-secondary": "#cfc3aa",
            "--text-muted": "#8d826c",
            "--border-color": "rgba(212, 175, 55, 0.3)"
          }
        },
        {
          id: "ivory-champagne",
          name: "Ivory & Champagne Gold",
          mood: "Soft imperial cream silk with light champagne gilding",
          isDark: false,
          swatchPrimary: "#fcf9f2",
          swatchSecondary: "#c5a059",
          vars: {
            "--bg-base": "#fcf9f2",
            "--card-bg": "#ffffff",
            "--card-surface": "#f5f0e6",
            "--card-highlight": "#eae1d2",
            "--accent-gold": "#b0883d",
            "--accent-subtle": "#806024",
            "--text-primary": "#2b2520",
            "--text-secondary": "#574d44",
            "--text-muted": "#8a7e72",
            "--border-color": "rgba(197, 160, 89, 0.35)"
          }
        },
        {
          id: "maroon-gold",
          name: "Traditional Maroon & Gold",
          mood: "Traditional Rajputana vermilion with sacred Kundan gold",
          isDark: true,
          swatchPrimary: "#30080f",
          swatchSecondary: "#e6b85c",
          vars: {
            "--bg-base": "#24040a",
            "--card-bg": "#360a12",
            "--card-surface": "#480e1a",
            "--card-highlight": "#571321",
            "--accent-gold": "#e6b85c",
            "--accent-subtle": "#b38934",
            "--text-primary": "#fdf4e3",
            "--text-secondary": "#e3cfb3",
            "--text-muted": "#a88e72",
            "--border-color": "rgba(230, 184, 92, 0.35)"
          }
        },
        {
          id: "emerald-gold",
          name: "Emerald Green & Gold",
          mood: "Heritage Panna gemstone velvet with warm temple gold",
          isDark: true,
          swatchPrimary: "#08231a",
          swatchSecondary: "#d4af37",
          vars: {
            "--bg-base": "#061b14",
            "--card-bg": "#0c2e22",
            "--card-surface": "#123d2f",
            "--card-highlight": "#194d3c",
            "--accent-gold": "#e0be53",
            "--accent-subtle": "#a3842c",
            "--text-primary": "#eaf5ef",
            "--text-secondary": "#bed8c9",
            "--text-muted": "#7a9e8a",
            "--border-color": "rgba(212, 175, 55, 0.35)"
          }
        },
        {
          id: "blush-rose",
          name: "Blush Pink & Rose Gold",
          mood: "Romantic palace terrace dusk with shimmering rose gold foil",
          isDark: false,
          swatchPrimary: "#fff2f4",
          swatchSecondary: "#c97573",
          vars: {
            "--bg-base": "#fff1f3",
            "--card-bg": "#ffffff",
            "--card-surface": "#ffe4e8",
            "--card-highlight": "#ffd6dc",
            "--accent-gold": "#c25e68",
            "--accent-subtle": "#943f49",
            "--text-primary": "#381c22",
            "--text-secondary": "#633c44",
            "--text-muted": "#996b74",
            "--border-color": "rgba(201, 117, 115, 0.35)"
          }
        },
        {
          id: "royal-blue-silver",
          name: "Blue & Silver",
          mood: "Nocturnal Udaipur lake navy with pure sterling foil sheen",
          isDark: true,
          swatchPrimary: "#09152b",
          swatchSecondary: "#cbd5e1",
          vars: {
            "--bg-base": "#060f21",
            "--card-bg": "#0c1d3b",
            "--card-surface": "#13284f",
            "--card-highlight": "#193466",
            "--accent-gold": "#cbd5e1",
            "--accent-subtle": "#94a3b8",
            "--text-primary": "#f8fafc",
            "--text-secondary": "#cbd5e1",
            "--text-muted": "#64748b",
            "--border-color": "rgba(203, 213, 225, 0.35)"
          }
        },
        {
          id: "pastel-floral",
          name: "Pastel Floral Garden",
          mood: "Delicate Kashmiri jasmine petals with warm morning gold",
          isDark: false,
          swatchPrimary: "#fcfaf7",
          swatchSecondary: "#b8860b",
          vars: {
            "--bg-base": "#fcfaf7",
            "--card-bg": "#ffffff",
            "--card-surface": "#f5f0e9",
            "--card-highlight": "#eae2d5",
            "--accent-gold": "#b8860b",
            "--accent-subtle": "#7d5b06",
            "--text-primary": "#332c28",
            "--text-secondary": "#5e524b",
            "--text-muted": "#8f827a",
            "--border-color": "rgba(184, 134, 11, 0.3)"
          }
        },
        {
          id: "indian-red-gold",
          name: "Traditional Indian Red & Gold",
          mood: "Sacred Sindoori vermilion & holy bridal Alta with Kundan accents",
          isDark: true,
          swatchPrimary: "#400609",
          swatchSecondary: "#e5b94f",
          vars: {
            "--bg-base": "#2b0306",
            "--card-bg": "#45090d",
            "--card-surface": "#5e0f14",
            "--card-highlight": "#73151b",
            "--accent-gold": "#e5b94f",
            "--accent-subtle": "#b0882e",
            "--text-primary": "#fff5ea",
            "--text-secondary": "#edd4b4",
            "--text-muted": "#b8946e",
            "--border-color": "rgba(229, 185, 79, 0.35)"
          }
        },
        {
          id: "modern-minimal-white",
          name: "Modern Minimal White",
          mood: "Architectural gallery white with micro-gold hairline precision",
          isDark: false,
          swatchPrimary: "#fafafa",
          swatchSecondary: "#a38237",
          vars: {
            "--bg-base": "#f7f7f8",
            "--card-bg": "#ffffff",
            "--card-surface": "#eeeeef",
            "--card-highlight": "#e2e2e5",
            "--accent-gold": "#96752c",
            "--accent-subtle": "#634d1c",
            "--text-primary": "#171717",
            "--text-secondary": "#404040",
            "--text-muted": "#737373",
            "--border-color": "rgba(150, 117, 44, 0.25)"
          }
        },
        {
          id: "royal-purple",
          name: "Purple & Gold",
          mood: "Majestic imperial Jamun velvet with opulent polished gold",
          isDark: true,
          swatchPrimary: "#1f0e2b",
          swatchSecondary: "#d4af37",
          vars: {
            "--bg-base": "#170921",
            "--card-bg": "#281238",
            "--card-surface": "#37194d",
            "--card-highlight": "#482163",
            "--accent-gold": "#e0be53",
            "--accent-subtle": "#9e812b",
            "--text-primary": "#f8f0fc",
            "--text-secondary": "#dabfe6",
            "--text-muted": "#9679a6",
            "--border-color": "rgba(212, 175, 55, 0.35)"
          }
        },
        {
          id: "sage-green-ivory",
          name: "Sage Green & Warm Ivory",
          mood: "Mehendi botanical sage with antique brass luster",
          isDark: true,
          swatchPrimary: "#13211c",
          swatchSecondary: "#d1b26f",
          vars: {
            "--bg-base": "#0e1a16",
            "--card-bg": "#192c25",
            "--card-surface": "#223b32",
            "--card-highlight": "#2d4c41",
            "--accent-gold": "#d1b26f",
            "--accent-subtle": "#9c8044",
            "--text-primary": "#f3eedd",
            "--text-secondary": "#c8c1ad",
            "--text-muted": "#827c6b",
            "--border-color": "rgba(209, 178, 111, 0.32)"
          }
        }
      ];

      // Active state
      let activeThemeId = "royal-black";
      let activeStyleId = "classic-royal";

      // Elements
      const body = document.body;
      const themeLabel = document.getElementById("active-theme-label");
      const themeSwatch = document.getElementById("active-theme-swatch");
      const paletteContainer = document.getElementById("palette-selection-container");
      const styleButtons = document.querySelectorAll(".style-choice-btn");

      // Populate Palette Swatch List
      function renderPalettes() {
        if (!paletteContainer) return;
        paletteContainer.innerHTML = "";

        THEMES.forEach(t => {
          const isSelected = t.id === activeThemeId;
          const card = document.createElement("button");
          card.className = `p-2.5 rounded-xl border flex items-center justify-between transition-all text-left ${isSelected ? 'ring-2 ring-amber-400 theme-surface font-semibold' : 'theme-surface/60 border-transparent hover:border-amber-400/40'}`;
          card.onclick = () => selectPalette(t.id);

          card.innerHTML = `
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-full flex overflow-hidden border border-white/20 shrink-0 shadow-sm">
                <div class="w-1/2 h-full" style="background-color: ${t.swatchPrimary}"></div>
                <div class="w-1/2 h-full" style="background-color: ${t.swatchSecondary}"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold theme-text-primary leading-snug">${t.name}</span>
                <span class="text-[9px] theme-text-muted leading-tight">${t.mood}</span>
              </div>
            </div>
            ${isSelected ? '<span class="material-symbols-outlined text-sm theme-gold-text">check_circle</span>' : ''}
          `;
          paletteContainer.appendChild(card);
        });
      }

      function updateActiveVisuals() {
        const t = THEMES.find(item => item.id === activeThemeId);
        if (!t) return;

        // Apply CSS Variables
        for (const [key, val] of Object.entries(t.vars)) {
          document.documentElement.style.setProperty(key, val);
        }

        // Apply Data Attributes
        body.setAttribute("data-theme-id", activeThemeId);
        body.setAttribute("data-visual-style", activeStyleId);

        // Update indicators
        const styleName = activeStyleId === 'classic-royal' ? 'Classic Style' : (activeStyleId === 'modern-editorial' ? 'Modern Editorial' : 'Romantic Floral');
        if (themeLabel) themeLabel.innerText = `${t.name} • ${styleName}`;
        if (themeSwatch) themeSwatch.style.backgroundColor = t.swatchSecondary;

        // Update style selection buttons in drawer
        styleButtons.forEach(btn => {
          const sId = btn.getAttribute("data-style-id");
          if (sId === activeStyleId) {
            btn.classList.add("ring-2", "ring-amber-400", "theme-surface");
            btn.classList.remove("opacity-70");
          } else {
            btn.classList.remove("ring-2", "ring-amber-400", "theme-surface");
            btn.classList.add("opacity-70");
          }
        });

        renderPalettes();
      }

      function selectPalette(id) {
        activeThemeId = id;
        updateActiveVisuals();
      }

      function selectStyle(id) {
        activeStyleId = id;
        updateActiveVisuals();
      }

      styleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const sId = btn.getAttribute("data-style-id");
          if (sId) selectStyle(sId);
        });
      });

      // 2. STUDIO DRAWER TOGGLES
      const drawer = document.getElementById("theme-studio-drawer");
      const backdrop = document.getElementById("theme-studio-backdrop");
      const openBtn1 = document.getElementById("open-studio-drawer-btn");
      const openBtn2 = document.getElementById("floating-customizer-btn");
      const openBtn3 = document.getElementById("open-studio-bottom-btn");
      const closeBtn = document.getElementById("close-studio-btn");
      const dragHandle = document.getElementById("drawer-drag-handle");
      const applyBtn = document.getElementById("apply-studio-btn");
      const resetBtn = document.getElementById("reset-default-btn");
      const shareThemeBtn = document.getElementById("copy-theme-code-btn");

      function openDrawer() {
        if (!drawer || !backdrop) return;
        backdrop.classList.remove("opacity-0", "pointer-events-none");
        drawer.classList.remove("translate-y-full");
      }

      function closeDrawer() {
        if (!drawer || !backdrop) return;
        drawer.classList.add("translate-y-full");
        backdrop.classList.add("opacity-0", "pointer-events-none");
      }

      [openBtn1, openBtn2, openBtn3].forEach(b => b?.addEventListener("click", openDrawer));
      [closeBtn, backdrop, dragHandle].forEach(b => b?.addEventListener("click", closeDrawer));

      applyBtn?.addEventListener("click", () => {
        closeDrawer();
        showToast("✨ Applied custom Theme & Style preset!");
      });

      resetBtn?.addEventListener("click", () => {
        activeThemeId = "royal-black";
        activeStyleId = "classic-royal";
        updateActiveVisuals();
        showToast("✨ Restored to Black & Antique Gold");
      });

      shareThemeBtn?.addEventListener("click", () => {
        const theme = THEMES.find(t => t.id === activeThemeId);
        const styleName = activeStyleId === 'classic-royal' ? 'Classic Style' : (activeStyleId === 'modern-editorial' ? 'Modern Editorial' : 'Romantic Floral');
        const text = `Wedding Invitation Theme Preset: ${theme?.name} (${styleName})`;
        navigator.clipboard?.writeText(text);
        showToast(`✨ Preset Copied: ${text}`);
      });

      // Toast feedback helper
      function showToast(msg) {
        const toast = document.getElementById("general-toast");
        if (toast) {
          toast.innerText = msg;
          toast.classList.remove("hidden");
          setTimeout(() => toast.classList.add("hidden"), 3000);
        }
      }

      // 3. COVER UNSEAL INTERACTION
      const openCoverBtn = document.getElementById('open-invitation-btn');
      const cover = document.getElementById('invitation-cover');
      if (openCoverBtn && cover) {
        openCoverBtn.addEventListener('click', function() {
          openCoverBtn.classList.add('scale-90', 'opacity-70');
          setTimeout(() => {
            cover.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
            // Unlock page scrolling only after the cover opens, and start the invitation at the top.
            document.body.classList.remove('overflow-hidden');
            document.documentElement.style.overflow = '';
            window.scrollTo({ top: 0, behavior: 'instant' });
          }, 350);
        });
      }

      // 4. AUDIO TOGGLE (SHEHNAI SIMULATION)
      let isPlaying = true;
      const coverAudioBtn = document.getElementById('cover-audio-btn');
      const innerAudioBtn = document.getElementById('inner-audio-toggle');
      function toggleAudio() {
        isPlaying = !isPlaying;
        const iconSpan = innerAudioBtn?.querySelector('.material-symbols-outlined');
        if (iconSpan) iconSpan.innerText = isPlaying ? 'volume_up' : 'volume_off';
        showToast(isPlaying ? "Shehnai melody resumed" : "Audio muted");
      }
      coverAudioBtn?.addEventListener('click', toggleAudio);
      innerAudioBtn?.addEventListener('click', toggleAudio);

      // 5. LANGUAGE SWITCHER
      const langEn = document.getElementById('lang-en-cover');
      const langHi = document.getElementById('lang-hi-cover');
      const langInner = document.getElementById('lang-switch-inner');

      // Full-page bilingual text map. Keeps names and real venue addresses unchanged.
      const TEXT_HI = {
        "Wedding Invitation": "विवाह निमंत्रण",
        "Open Invitation": "निमंत्रण खोलें",
        "Open your invitation": "निमंत्रण पत्र खोलें",
        "Shehnai": "शहनाई",
        "With Love, Blessings & Good Wishes": "स्नेह, आशीर्वाद एवं शुभकामनाओं सहित",
        "The families cordially solicit your august presence and heartfelt blessings on the auspicious union and matrimonial solemnization of their beloved children.": "दोनों परिवार अपने प्रिय बच्चों के शुभ विवाह के पावन अवसर पर आपकी गरिमामयी उपस्थिति और स्नेहपूर्ण आशीर्वाद की विनम्र प्रार्थना करते हैं।",
        "Together Forever": "सदा के लिए एक-दूजे के",
        "“Two souls, one sacred journey woven in the timeless tapestry of devotion, laughter, and eternal love.”": "“दो आत्माएँ, एक पावन यात्रा—समर्पण, मुस्कान और अनंत प्रेम के अटूट बंधन में बँधी हुई।”",
        "Auspicious Mahurat Countdown": "शुभ विवाह मुहूर्त की उलटी गिनती",
        "Wednesday, 25 November 2026": "बुधवार, 25 नवम्बर 2026",
        "Days": "दिन", "Hours": "घंटे", "Mins": "मिनट", "Secs": "सेकंड",
        "Deoria, Uttar Pradesh • Vedic Muhurat": "देवरिया, उत्तर प्रदेश • वैदिक मुहूर्त",
        "Sacred Ceremonies": "पावन विवाह समारोह",
        "Complete chronicle of rituals, auspicious festivities, and venues": "सभी रस्मों, मंगल उत्सवों और आयोजन स्थलों का विवरण",
        "Tue, 21 Nov 2026": "मंगलवार, 21 नवम्बर 2026",
        "Tue, 24 Nov 2026": "मंगलवार, 24 नवम्बर 2026",
        "Wed, 25 Nov 2026": "बुधवार, 25 नवम्बर 2026",
        "Tilak": "तिलक",
        "Mehendi & Sangeet": "मेहंदी एवं संगीत",
        "Haldi": "हल्दी",
        "Shubh Vivah": "शुभ विवाह",
        "Details": "विवरण",
        "View Details": "विवरण देखें",
        "View Location": "स्थान देखें",
        "Family Blessings": "परिवार का आशीर्वाद",
        "With the divine blessings of our ancestors and elders": "हमारे पूर्वजों एवं बड़ों के दिव्य आशीर्वाद सहित",
        "Groom's Side": "वर पक्ष",
        "Bride's Side": "वधू पक्ष",
        "Grandparents & Parents cordially invite you to join the celebration of love.": "दादा-दादी एवं माता-पिता आपको प्रेम और मंगल के इस उत्सव में सादर आमंत्रित करते हैं।",
        "Warmly welcome all dear relatives and friends to bless the new chapter.": "नए जीवन-अध्याय को आशीर्वाद देने हेतु सभी प्रिय रिश्तेदारों एवं मित्रों का हार्दिक स्वागत है।",
        "Destination & Venue": "विवाह स्थल एवं पहुँचने का विवरण",
        "Annapurna Marriage Hall, Parshuram Chowk, Deoria, Uttar Pradesh": "अन्नपूर्णा मैरेज हॉल,परशुराम चौक,देवरिया, उत्तर प्रदेश",
        "Annapurna Marriage Hall, Parshuram Chowk, Deoria, Uttar Pradesh · View on Map": "अन्नपूर्णा मैरेज हॉल,परशुराम चौक,देवरिया, उत्तर प्रदेश · मानचित्र देखें",
        "CC Road, Near Hanuman Mandir, Deoria, Uttar Pradesh 274001 · View on Map": "सीसी रोड, हनुमान मंदिर के पास, देवरिया, उत्तर प्रदेश 274001 · मानचित्र देखें",
        "CC Road, Near Hanuman Mandir, Deoria, Uttar Pradesh 274001": "सीसी रोड, हनुमान मंदिर के पास, देवरिया, उत्तर प्रदेश 274001",
        "Railway": "रेलवे स्टेशन", "Airport": "हवाई अड्डा",
        "Directions": "रास्ता देखें", "Share Venue": "विवाह स्थल साझा करें",
        "Memories & Moments": "यादगार पल",
        "Engagement Vault": "सगाई की यादें",
        "RSVP via WhatsApp": "व्हाट्सऐप पर जवाब दें",
        "Share Invitation": "निमंत्रण साझा करें",
        "Theme Studio": "थीम स्टूडियो",
        "Customize (33)": "रूप सज्जा (33)",
        "Memories": "यादें", "Piyush & Priti": "Piyush & Priti",
        "Sagai & Engagement": "सगाई एवं अंगूठी समारोह",
        "Monday, 23 Nov 2026 • 6:00 PM onwards": "सोमवार, 23 नवम्बर 2026 • शाम 6:00 बजे से",
        "Tuesday, 24 Nov 2026 • 11:00 AM": "मंगलवार, 24 नवम्बर 2026 • सुबह 11:00 बजे",
        "Tuesday, 24 Nov 2026 • 5:30 PM": "मंगलवार, 24 नवम्बर 2026 • शाम 5:30 बजे",
        "Tuesday, 24 Nov 2026 • 7:30 PM onwards": "मंगलवार, 24 नवम्बर 2026 • शाम 7:30 बजे से",
        "Wednesday, 25 Nov 2026 • 10:30 AM": "बुधवार, 25 नवम्बर 2026 • सुबह 10:30 बजे",
        "Wednesday, 25 Nov 2026 • 7:00 PM (Pheras: Midnight)": "बुधवार, 25 नवम्बर 2026 • शाम 7:00 बजे (फेरे: मध्यरात्रि)",
        "Darbar Hall, Deoria Palace Grounds": "दरबार हॉल, देवरिया पैलेस परिसर",
        "Elegant Pastels & Jodhpuri Coats": "हल्के सुंदर रंग एवं जोधपुरी कोट",
        "Sacred exchange of rings blessed by elders, followed by traditional Bhojpuri welcome songs and family dinner.": "बड़ों के आशीर्वाद से अंगूठियों का पावन आदान-प्रदान, पारंपरिक भोजपुरी स्वागत गीत और पारिवारिक भोज।",
        "Traditional Silk Kurta & Dhoti / Nehru Jackets": "पारंपरिक रेशमी कुर्ता एवं धोती / नेहरू जैकेट",
        "Auspicious Tilak ceremony invoking Lord Ganesha's blessings with sandalwood paste, sweets, and gift presentations.": "चंदन, मिठाइयों और उपहारों के साथ भगवान गणेश के आशीर्वाद हेतु मंगल तिलक समारोह।",
        "Floral Lehengas & Festive Kurtas (Green / Floral shades)": "फूलों वाले लहंगे एवं उत्सवी कुर्ते (हरे/फूलों के रंग)",
        "Intricate Rajasthani & Arabic henna artistry, live Dholak beats, traditional wedding geet, and folk dance.": "राजस्थानी एवं अरबी मेहंदी कला, ढोलक की धुनें, पारंपरिक विवाह गीत और लोकनृत्य।",
        "Sangeet & Musical Night": "संगीत एवं सुरमयी संध्या",
        "Ballroom & Grand Lawns": "बॉलरूम एवं विशाल लॉन",
        "Festive Bandhgala Attire": "आकर्षक बंदगला परिधान",
        "Celebratory choreography by families, live Shehnai-Sufi band lineup, followed by grand feast.": "परिवारों की मनमोहक प्रस्तुतियाँ, शहनाई-सूफी संगीत और भव्य भोज।",
        "Shades of Saffron & Mustard Yellow": "केसरिया एवं सरसों पीले रंग के परिधान",
        "Sacred turmeric and sandalwood paste application with marigold showers, traditional songs, and morning brunch.": "हल्दी एवं चंदन की पावन रस्म, गेंदे के फूलों की वर्षा, पारंपरिक गीत और सुबह का नाश्ता।",
        "Traditional Indian Attire & Heirloom Silks": "पारंपरिक भारतीय एवं रेशमी परिधान",
        "Grand Baraat welcome, Varmala under the starry canopy, sacred Vedic Vivah Sanskar around Agni, and Vidai.": "भव्य बारात स्वागत, तारों की छाँव में वरमाला, अग्नि के समक्ष वैदिक विवाह संस्कार और विदाई।",
        "Ceremony Details": "समारोह का विवरण",
        "Ceremony Chronicle": "समारोह की जानकारी",
        "Save Event to Calendar": "कैलेंडर में इवेंट सेव करें",
        "Dismiss": "बंद करें",
        "Apply Theme & Style to Invitation": "निमंत्रण पर थीम और शैली लागू करें",
        "Reset to Black & Gold Default": "काले और सुनहरे रंगों पर लौटें",
        "Share Theme Preset": "थीम साझा करें",
        "STEP 1: SELECT PALETTE (11 PALETTES)": "चरण 1: रंग संयोजन चुनें (11 विकल्प)",
        "STEP 2: SELECT VISUAL STYLE (3 DISTINCT STYLES)": "चरण 2: दृश्य शैली चुनें (3 विकल्प)",
        "Style A: Classic Style": "शैली A: पारंपरिक शैली",
        "Style B: Modern Editorial": "शैली B: आधुनिक संपादकीय",
        "Style C: Romantic Floral": "शैली C: रोमांटिक पुष्प",
        "33 Theme Combinations (11 Themes × 3 Styles)": "33 थीम संयोजन (11 रंग-रूप × 3 शैलियाँ)",
        "Themed invitation loaded": "थीम वाला निमंत्रण खुल गया",
        "✨ Applied custom Theme & Style preset!": "✨ चुनी हुई थीम और शैली लागू हो गई!",
        "✨ Restored to Black & Antique Gold": "✨ काले और एंटीक गोल्ड की थीम बहाल की गई",
        "Shehnai melody resumed": "शहनाई की धुन फिर शुरू हुई",
        "Audio muted": "ध्वनि बंद है",
        "✨ Invitation URL copied to clipboard!": "✨ निमंत्रण का लिंक कॉपी हो गया!",
        "✨ Venue address copied!": "✨ विवाह स्थल का पता कॉपी हो गया!",
        "P & P": "P & P",
        "Nov 2026": "नवम्बर 2026",
        "Music toggle": "संगीत चालू/बंद करें",
        "Language Switch": "भाषा बदलें",
        "Decorative Wax Seal": "सजावटी मोहर",
        "Open Invitation CTA": "निमंत्रण खोलें",
        "Arch Motif Watermark": "मेहराब की सजावट",
        "Formal Family Grace Box": "परिवार का स्नेह संदेश",
        "Couple Editorial Frame": "वर-वधू का चित्र",
        "Romantic Quote": "प्रेम संदेश",
        "Live Wedding Countdown Section": "विवाह की उलटी गिनती",
        "4-Box Countdown Grid": "समय की उलटी गिनती",
        "RSVP & Celebration WhatsApp Portal": "व्हाट्सऐप पर अपनी उपस्थिति बताएँ",
        "More Soon": "जल्द आ रहा है",
        "Venue": "विवाह स्थल",
        "Sagai & Engagement": "सगाई एवं अंगूठी समारोह",
        "Header": "शीर्षक",
        "Actions": "विकल्प",
        "Step 1: Choose Color Palette": "चरण 1: रंग संयोजन चुनें",
        "11 Color Schemes": "11 रंग संयोजन",
        "Palette Swatch Grid": "रंगों के विकल्प",
        "Generated via JS for immaculate clarity & swatches": "रंगों के विकल्प यहाँ प्रदर्शित होंगे",
        "Step 2: Choose Visual Style": "चरण 2: दृश्य शैली चुनें",
        "3 Architectural Moods": "3 विशिष्ट दृश्य शैलियाँ",
        "Classic Style": "पारंपरिक शैली",
        "Jharokha arches, Sanskrit shlokas & seal": "झरोखे, संस्कृत श्लोक और सजावटी मोहर",
        "Modern Editorial": "आधुनिक संपादकीय",
        "Vogue elegance, hairlines & whitespace": "आधुनिक सुरुचि, महीन रेखाएँ और खुला लेआउट",
        "Romantic Floral": "रोमांटिक पुष्प शैली",
        "Lotus garlands, soft curves & script": "कमल की मालाएँ, कोमल आकृतियाँ और सुंदर अक्षर",
        "A sacred celebration with blessings & sweets.": "आशीर्वाद और मिठाइयों से सुसज्जित एक पावन उत्सव।",
        "Floral Lehengas & Kurta": "फूलों की कढ़ाई वाले लहंगे एवं कुर्ते",
        "Studio Engine Active": "थीम स्टूडियो सक्रिय",
        "Black & Gold • Classic Style": "काला एवं सुनहरा • पारंपरिक शैली",
        "Customize": "रूप सज्जा",
        "Select Palette": "रंग संयोजन चुनें",
        "Select Visual Style": "दृश्य शैली चुनें",
        "Apply": "लागू करें",
        "Reset": "रीसेट करें",
        "Share": "साझा करें"
      };
      const TEXT_EN = Object.fromEntries(Object.entries(TEXT_HI).map(([en, hi]) => [hi, en]));
      let currentLang = 'en';
      function translatePage(lang) {
        currentLang = lang;
        const dict = lang === 'hi' ? TEXT_HI : TEXT_EN;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          const parent = node.parentElement;
          if (!parent || parent.closest('script, style, .material-symbols-outlined, [data-no-translate]')) continue;
          const original = node.nodeValue;
          const normalized = original.replace(/\s+/g, ' ').trim();
          if (!normalized || !Object.prototype.hasOwnProperty.call(dict, normalized)) continue;
          const translated = dict[normalized];
          const leading = original.match(/^\s*/)?.[0] || '';
          const trailing = original.match(/\s*$/)?.[0] || '';
          node.nodeValue = leading + translated + trailing;
        }
        document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
      }

      const i18n = {
        en: {
          mantra: "॥ श्री गणेशाय नमः ॥",
          eyebrow: "Wedding Invitation",
          btnText: "Open Invitation",
          venue: "Deoria, Uttar Pradesh, India",
          inviteMsg: "The families cordially solicit your august presence and heartfelt blessings on the auspicious union and matrimonial solemnization of their beloved children.",
          quote: "“Two souls, one sacred journey woven in the timeless tapestry of devotion, laughter, and eternal love.”",
          countdown: "Auspicious Mahurat Countdown",
          days: "Days", hours: "Hours", mins: "Mins", secs: "Secs",
          rsvp: "RSVP via WhatsApp"
        },
        hi: {
          mantra: "॥ ॐ श्री गणेशाय नमः ॥",
          eyebrow: "विवाह निमंत्रण",
          btnText: "आमंत्रण पत्र खोलें",
          venue: "देवरिया, उत्तर प्रदेश, भारत",
          inviteMsg: "परम पिता परमात्मा की असीम अनुकंपा से हमारे सुपुत्र एवं सुपुत्री के पावन परिणय संस्कार के इस मांगलिक अवसर पर आप सादर आमंत्रित हैं।",
          quote: "“दो आत्माओं का एक पवित्र संगम, जो स्नेह, समर्पण और अनंत प्रेम के सूत्र में बंधा है।”",
          countdown: "शुभ विवाह मुहूर्त समय",
          days: "दिन", hours: "घंटे", mins: "मिनट", secs: "सेकंड",
          rsvp: "व्हाट्सएप द्वारा उत्तर दें"
        }
      };

      function setLang(lang) {
        const d = i18n[lang];
        document.getElementById('cover-ganesh-mantra').innerText = d.mantra;
        document.getElementById('cover-eyebrow').innerText = d.eyebrow;
        document.getElementById('cover-btn-text').innerText = d.btnText;
        document.getElementById('cover-venue').innerText = d.venue;
        document.getElementById('inner-invitation-message').innerText = d.inviteMsg;
        document.getElementById('inner-quote').innerText = d.quote;
        document.getElementById('countdown-label').innerText = d.countdown;
        document.getElementById('label-days').innerText = d.days;
        document.getElementById('label-hours').innerText = d.hours;
        document.getElementById('label-minutes').innerText = d.mins;
        document.getElementById('label-seconds').innerText = d.secs;
        document.getElementById('rsvp-btn-text').innerText = d.rsvp;

        if (lang === 'en') {
          langEn?.classList.add('bg-amber-400', 'text-black');
          langHi?.classList.remove('bg-amber-400', 'text-black');
          if (langInner) langInner.innerText = 'हिन्दी';
        } else {
          langHi?.classList.add('bg-amber-400', 'text-black');
          langEn?.classList.remove('bg-amber-400', 'text-black');
          if (langInner) langInner.innerText = 'English';
        }
        translatePage(lang);
      }

      langEn?.addEventListener('click', () => setLang('en'));
      langHi?.addEventListener('click', () => setLang('hi'));
      langInner?.addEventListener('click', () => {
        const cur = langInner.innerText === 'हिन्दी' ? 'hi' : 'en';
        setLang(cur);
      });

      // 6. LIVE COUNTDOWN TIMER (25 Nov 2026)
      const targetDate = new Date('2026-11-25T19:00:00+05:30').getTime();
      function updateTimer() {
        const diff = targetDate - new Date().getTime();
        if (diff > 0) {
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const s = Math.floor((diff % (1000 * 60)) / 1000);
          document.getElementById('timer-days').innerText = d < 10 ? '0' + d : d;
          document.getElementById('timer-hours').innerText = h < 10 ? '0' + h : h;
          document.getElementById('timer-minutes').innerText = m < 10 ? '0' + m : m;
          document.getElementById('timer-seconds').innerText = s < 10 ? '0' + s : s;
        }
      }
      updateTimer();
      setInterval(updateTimer, 1000);

      // 7. CEREMONIES DATA & MODAL (ALL 6 RITUALS)
      const ceremonies = {
        sagai: {
          title: "Sagai & Engagement",
          datetime: "Monday, 23 Nov 2026 • 6:00 PM onwards",
          venue: "Darbar Hall, Deoria Palace Grounds",
          notes: "Sacred exchange of rings blessed by elders, followed by traditional Bhojpuri welcome songs and family dinner.",
          icon: "favorite",
          start: "20261123T180000", end: "20261123T220000"
        },
        tilak: {
          title: "Tilak",
          datetime: "Tuesday, 24 Nov 2026 • 11:00 AM",
          venue: "Ajaypura Marwat, Pakadi, Deoria",
          notes: "Auspicious Tilak ceremony invoking Lord Ganesha's blessings with sandalwood paste, sweets, and gift presentations.",
          icon: "verified",
          locationUrl: "https://maps.app.goo.gl/Gzwegp7iD2AQd2zZ8",
          start: "20261124T110000", end: "20261124T140000"
        },
        mehendi: {
          title: "Mehendi & Sangeet",
          datetime: "Tuesday, 24 Nov 2026 • 5:30 PM",
          venue: "at Home, Indira Nagar, CC Road, Deoria",
          notes: "Intricate Rajasthani & Arabic henna artistry, live Dholak beats, traditional wedding geet, and folk dance.",
          icon: "palette",
          start: "20261124T153000", end: "20261124T183000"
        },
        sangeet: {
          title: "Sangeet & Musical Night",
          datetime: "Tuesday, 24 Nov 2026 • 7:30 PM onwards",
          venue: "Ballroom & Grand Lawns",
          notes: "Celebratory choreography by families, live Shehnai-Sufi band lineup, followed by grand feast.",
          icon: "nightlife",
          start: "20261124T193000", end: "20261124T235900"
        },
        haldi: {
          title: "Haldi",
          datetime: "Wednesday, 25 Nov 2026 • 10:30 AM",
          venue: "Indira Nagar, CC Road, Deoria",
          notes: "Sacred turmeric and sandalwood paste application with marigold showers, traditional songs, and morning brunch.",
          icon: "flare",
          start: "20261125T093000", end: "20261125T123000"
        },
        vivah: {
          title: "Shubh Vivah",
          datetime: "Wednesday, 25 Nov 2026 • 7:00 PM (Pheras: Midnight)",
          venue: "Annapurna Marriage Hall, Parshuram Chowk, Deoria",
          notes: "Grand Baraat welcome, Varmala under the starry canopy, sacred Vedic Vivah Sanskar around Agni, and Vidai.",
          icon: "temple_hindu",
          locationUrl: "https://maps.app.goo.gl/neYJPdxVLzDrL6Vz6",
          start: "20261125T190000", end: "20261126T020000"
        }
      };

      const modal = document.getElementById('ceremony-modal');
      const modalBox = document.getElementById('ceremony-modal-box');
      let currentCeremonyKey = 'sagai';

      function openModal(key) {
        const item = ceremonies[key];
        if (!item) return;
        currentCeremonyKey = key;
        document.getElementById('modal-title').innerText = item.title;
        document.getElementById('modal-datetime').innerText = item.datetime;
        document.getElementById('modal-venue').innerText = item.venue;
        document.getElementById('modal-notes').innerText = item.notes;
        document.getElementById('modal-icon').innerText = item.icon;
        const locationBtn = document.getElementById('modal-location-btn');
        if (item.locationUrl) {
          locationBtn.href = item.locationUrl;
          locationBtn.classList.remove('hidden');
          locationBtn.classList.add('flex');
        } else {
          locationBtn.href = '#';
          locationBtn.classList.add('hidden');
          locationBtn.classList.remove('flex');
        }
        if (currentLang === 'hi') translatePage('hi');

        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalBox.classList.remove('scale-95');
        modalBox.classList.add('scale-100');
      }

      function closeModal() {
        modalBox.classList.remove('scale-100');
        modalBox.classList.add('scale-95');
        modal.classList.add('opacity-0', 'pointer-events-none');
      }

      document.querySelectorAll('.open-modal-btn').forEach(b => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(b.getAttribute('data-ceremony'));
        });
      });

      document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
      document.getElementById('modal-dismiss-btn')?.addEventListener('click', closeModal);
      modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

      document.getElementById('modal-calendar-btn')?.addEventListener('click', () => {
        const item = ceremonies[currentCeremonyKey];
        if (!item) return;

        // Keep the original behaviour: open Google Calendar's event template page.
        // Ceremony times are stored in India Standard Time (UTC+05:30).
        const toGoogleCalendarStamp = (localStamp) => {
          const y = Number(localStamp.slice(0, 4));
          const mo = Number(localStamp.slice(4, 6)) - 1;
          const d = Number(localStamp.slice(6, 8));
          const hh = Number(localStamp.slice(9, 11));
          const mm = Number(localStamp.slice(11, 13));
          const utc = new Date(Date.UTC(y, mo, d, hh, mm) - (330 * 60 * 1000));
          return utc.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
        };
        const mapUrl = item.locationUrl || '';
        const description = item.notes + (mapUrl ? '\nLocation: ' + mapUrl : '');
        const location = item.venue + ', Deoria, Uttar Pradesh, India';
        const params = new URLSearchParams({
          action: 'TEMPLATE',
          text: 'Piyush & Priti: ' + item.title,
          dates: toGoogleCalendarStamp(item.start) + '/' + toGoogleCalendarStamp(item.end),
          details: description,
          location,
          ctz: 'Asia/Kolkata'
        });
        window.open('https://calendar.google.com/calendar/render?' + params.toString(), '_blank', 'noopener,noreferrer');
      });

      // 8. SHARE HELPERS
      document.getElementById('share-card-btn')?.addEventListener('click', () => {
        if (navigator.share) {
          navigator.share({
            title: "Piyush & Priti Wedding Invitation",
            text: "You are warmly invited to celebrate the wedding of Piyush & Priti on 25 November 2026 at Deoria, Uttar Pradesh.",
            url: window.location.href
          });
        } else {
          navigator.clipboard?.writeText(window.location.href);
          showToast("✨ Invitation URL copied to clipboard!");
        }
      });

      document.getElementById('venue-share-btn')?.addEventListener('click', () => {
        const venueInfo = "Piyush & Priti wedding venue — Annapurna Marriage Hall, Parshuram Chowk, Deoria, Uttar Pradesh 274001";
        if (navigator.share) {
          navigator.share({ title: "Wedding Venue Location", text: venueInfo, url: "https://maps.app.goo.gl/neYJPdxVLzDrL6Vz6" });
        } else {
          navigator.clipboard?.writeText(venueInfo + " — Map: https://maps.app.goo.gl/neYJPdxVLzDrL6Vz6");
          showToast("✨ Venue address and map link copied!");
        }
      });

      // Initialize
      updateActiveVisuals();
    })();
