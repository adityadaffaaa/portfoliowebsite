/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        heading1: ["40px", { fontWeight: "700" }],
        heading2: ["32px", { fontWeight: "500" }],
        heading3: ["26px", { fontWeight: "500" }],
        heading4: ["20px", { fontWeight: "500" }],
        paragraph1: ["18px", { fontWeight: "500" }],
        paragraph2: ["18px", { fontWeight: "300" }],
        paragraph3: ["16px", { fontWeight: "600" }],
        paragraph4: ["16px", { fontWeight: "300" }],
        heading1res: ["28px", { fontWeight: "700" }],
        heading2res: ["24px", { fontWeight: "500" }],
        heading3res: ["20px", { fontWeight: "500" }],
        heading4res: ["18px", { fontWeight: "500" }],
        paragraph1res: ["14px", { fontWeight: "500" }],
        paragraph2res: ["14px", { fontWeight: "300" }],
        paragraph3res: ["12px", { fontWeight: "600" }],
        paragraph4res: ["12px", { fontWeight: "300" }],
      },
      colors: {
        primary: "#EE6A5E",
        secondary: "#383C5A",
        text1: "#FFFFFF",
        text2: "#E2E2E2",
        background1: "#232323",
        background2: "#4E5480",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      animation: {
        slide: "slide 2500ms ease-in-out infinite",
        slide2: "slide2 2500ms ease-in-out infinite",
        slide3: "slide3 2500ms ease-in-out infinite",
        slide4: "slide4 2500ms ease-in-out infinite",
        grow: "grow 2500ms ease-in-out infinite",
        slidemenu: "slidemenu 200ms ease-in-out",
        slidemenuback: "slidemenuback 200ms ease-in-out",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(0%)" },
        },
        slide2: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0%)" },
        },
        slide3: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0%)" },
        },
        slide4: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" },
        },
        grow: {
          "0%, 100%": { transform: "scale(120%)" },
          "50%": { transform: "scale(100%)" },
        },
        slidemenu: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slidemenuback: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-20%)" },
        },
      },
    },
  },
  plugins: [],
};
