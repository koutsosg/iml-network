const Slugify = (text: string) => {
  const map: { [key: string]: string } = {
    α: "a",
    β: "b",
    γ: "g",
    δ: "d",
    ε: "e",
    ζ: "z",
    η: "h",
    θ: "th",
    ι: "i",
    κ: "k",
    λ: "l",
    μ: "m",
    ν: "n",
    ξ: "x",
    ο: "o",
    π: "p",
    ρ: "r",
    σ: "s",
    τ: "t",
    υ: "u",
    φ: "f",
    χ: "ch",
    ψ: "ps",
    ω: "o",
    ά: "a",
    έ: "e",
    ί: "i",
    ό: "o",
    ύ: "u",
    ή: "h",
    ώ: "o",
    ς: "s",
    ϊ: "i",
    ΰ: "u",
    ϋ: "u",
    ΐ: "i",
  };

  return text
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, (char) => map[char] || char)
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};
export default Slugify;
