// Game Idea Generator - Main JavaScript

// Data storage for adjectives, characters, and genres
let adjectives = [];
let characters = [];
let genres = [];
let vibes = [];
let currencies = [];
let weapons = [];
let colors = [];
let harmonies = [];
let themes = [];
let times = [];
let places = [];
let artStyles = [];
let aesthetics = [];
let modes = [];
let frozenTerms = new Set(); // Store IDs of frozen terms

// DOM Elements
const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const frozenList = document.getElementById("frozen-list");
const currentYear = document.getElementById("current-year");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
	// Set current year in footer
	currentYear.textContent = new Date().getFullYear();

	// Load data files
	loadAdjectives();
	loadCharacters();
	loadGenres();
	loadVibes();
	loadCurrencies();
	loadWeapons();
	loadColors();
	loadHarmonies();
	loadThemes();
	loadTimes();
	loadPlaces();
	loadArtStyles();
	loadAesthetics();
	loadModes();

	// Add event listeners
	generateBtn.addEventListener("click", generateNewIdea);
	resetBtn.addEventListener("click", resetAllFrozen);

	// Add click event listeners to all terms
	document
		.querySelectorAll(
			".adjective, .noun, .genre, .vibe, .currency, .weapon, .color, .harmony, .theme, .time, .place, .art-style, .aesthetic, .mode"
		)
		.forEach((term) => {
			term.addEventListener("click", toggleFrozen);
		});

	// Generate initial game idea
	generateNewIdea();
});

//------------------------------------------------------------------------------

// Load adjectives from character_descriptions.txt
async function loadAdjectives() {
	try {
		const response = await fetch("character_descriptions.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		adjectives = text
			.split("\n")
			.filter((adj) => adj.trim() !== "")
			.map((adj) => adj.trim());

		if (adjectives.length === 0) {
			adjectives = getDefaultAdjectives();
		}
	} catch (error) {
		console.log("Using default adjectives");
		adjectives = getDefaultAdjectives();
	}
}

// Load characters from characters.txt
async function loadCharacters() {
	try {
		const response = await fetch("characters.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		characters = text
			.split("\n")
			.filter((char) => char.trim() !== "")
			.map((char) => char.trim());

		if (characters.length === 0) {
			characters = getDefaultCharacters();
		}
	} catch (error) {
		console.log("Using default characters");
		characters = getDefaultCharacters();
	}
}

// Load genres from genres.txt
async function loadGenres() {
	try {
		const response = await fetch("genres.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		genres = text
			.split("\n")
			.filter((genre) => genre.trim() !== "")
			.map((genre) => genre.trim());

		if (genres.length === 0) {
			genres = getDefaultGenres();
		}
	} catch (error) {
		console.log("Using default genres");
		genres = getDefaultGenres();
	}
}

// Load colors from colors.txt
async function loadColors() {
	try {
		const response = await fetch("colors.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		colors = text
			.split("\n")
			.filter((color) => color.trim() !== "")
			.map((color) => color.trim());

		if (colors.length === 0) {
			colors = getDefaultColors();
		}
	} catch (error) {
		console.log("Using default colors");
		colors = getDefaultColors();
	}
}

// Load harmonies from color_harmonies.txt
async function loadHarmonies() {
	try {
		const response = await fetch("color_harmonies.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		harmonies = text
			.split("\n")
			.filter((harmony) => harmony.trim() !== "")
			.map((harmony) => harmony.trim());

		if (harmonies.length === 0) {
			harmonies = getDefaultHarmonies();
		}
	} catch (error) {
		console.log("Using default harmonies");
		harmonies = getDefaultHarmonies();
	}
}

// Load themes from color_themes.txt
async function loadThemes() {
	try {
		const response = await fetch("color_themes.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		themes = text
			.split("\n")
			.filter((theme) => theme.trim() !== "")
			.map((theme) => theme.trim());

		if (themes.length === 0) {
			themes = getDefaultThemes();
		}
	} catch (error) {
		console.log("Using default themes");
		themes = getDefaultThemes();
	}
}

// Load times from time_themes.txt
async function loadTimes() {
	try {
		const response = await fetch("time_themes.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		times = text
			.split("\n")
			.filter((time) => time.trim() !== "")
			.map((time) => time.trim());

		if (times.length === 0) {
			times = getDefaultTimes();
		}
	} catch (error) {
		console.log("Using default times");
		times = getDefaultTimes();
	}
}

// Load places from places.txt
async function loadPlaces() {
	try {
		const response = await fetch("places.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		places = text
			.split("\n")
			.filter((place) => place.trim() !== "")
			.map((place) => place.trim());

		if (places.length === 0) {
			places = getDefaultPlaces();
		}
	} catch (error) {
		console.log("Using default places");
		places = getDefaultPlaces();
	}
}

// Load art styles from art_styles.txt
async function loadArtStyles() {
	try {
		const response = await fetch("art_styles.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		artStyles = text
			.split("\n")
			.filter((style) => style.trim() !== "")
			.map((style) => style.trim());

		if (artStyles.length === 0) {
			artStyles = getDefaultArtStyles();
		}
	} catch (error) {
		console.log("Using default art styles");
		artStyles = getDefaultArtStyles();
	}
}

// Load aesthetics from aesthetics.txt
async function loadAesthetics() {
	try {
		const response = await fetch("aesthetics.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		aesthetics = text
			.split("\n")
			.filter((aesthetic) => aesthetic.trim() !== "")
			.map((aesthetic) => aesthetic.trim());

		if (aesthetics.length === 0) {
			aesthetics = getDefaultAesthetics();
		}
	} catch (error) {
		console.log("Using default aesthetics");
		aesthetics = getDefaultAesthetics();
	}
}

// Load modes from mode.txt
async function loadModes() {
	try {
		const response = await fetch("mode.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		modes = text
			.split("\n")
			.filter((mode) => mode.trim() !== "")
			.map((mode) => mode.trim());

		if (modes.length === 0) {
			modes = getDefaultModes();
		}
	} catch (error) {
		console.log("Using default modes");
		modes = getDefaultModes();
	}
}

// Load vibes from vibes.txt
async function loadVibes() {
	try {
		const response = await fetch("vibes.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		vibes = text
			.split("\n")
			.filter((vibe) => vibe.trim() !== "")
			.map((vibe) => vibe.trim());

		if (vibes.length === 0) {
			vibes = getDefaultVibes();
		}
	} catch (error) {
		console.log("Using default vibes");
		vibes = getDefaultVibes();
	}
}

// Load currencies from currencies.txt
async function loadCurrencies() {
	try {
		const response = await fetch("currencies.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		currencies = text
			.split("\n")
			.filter((currency) => currency.trim() !== "")
			.map((currency) => currency.trim());

		if (currencies.length === 0) {
			currencies = getDefaultCurrencies();
		}
	} catch (error) {
		console.log("Using default currencies");
		currencies = getDefaultCurrencies();
	}
}

// Load weapons from weapons.txt
async function loadWeapons() {
	try {
		const response = await fetch("weapons.txt");
		if (!response.ok) {
			throw new Error("File not found");
		}
		const text = await response.text();
		weapons = text
			.split("\n")
			.filter((weapon) => weapon.trim() !== "")
			.map((weapon) => weapon.trim());

		if (weapons.length === 0) {
			weapons = getDefaultWeapons();
		}
	} catch (error) {
		console.log("Using default weapons");
		weapons = getDefaultWeapons();
	}
}

//------------------------------------------------------------------------------

// Default adjectives if file is not found
function getDefaultAdjectives() {
	return [
		"mysterious",
		"brave",
		"cunning",
		"wise",
		"reckless",
		"ancient",
		"legendary",
		"forgotten",
		"powerful",
		"humble",
	];
}

// Default characters if file is not found
function getDefaultCharacters() {
	return [
		"wanderer",
		"knight",
		"mage",
		"rogue",
		"dragon",
		"king",
		"queen",
		"prophet",
		"guardian",
		"beast",
	];
}

// Default genres if file is not found
function getDefaultGenres() {
	return [
		"Action",
		"Adventure",
		"RPG",
		"Strategy",
		"Puzzle",
		"Simulation",
		"Horror",
		"Survival",
		"Platformer",
		"Shooter",
	];
}

// Default colors if file is not found
function getDefaultColors() {
	return [
		"red",
		"blue",
		"green",
		"yellow",
		"purple",
		"orange",
		"pink",
		"brown",
		"black",
		"white",
		"gray",
		"cyan",
		"magenta",
		"silver",
		"gold",
	];
}

// Default harmonies if file is not found
function getDefaultHarmonies() {
	return [
		"Complementary",
		"Monochromatic",
		"Analogous",
		"Split Complementary",
		"Triadic",
		"Tetradic",
		"Square",
	];
}

// Default themes if file is not found
function getDefaultThemes() {
	return [
		"Monochromatic",
		"Sepia",
		"Pastel",
		"Neon",
		"Natural",
		"Muted",
		"Jewel Toned",
		"Primary",
		"Warm",
		"Cool",
	];
}

// Default times if file is not found
function getDefaultTimes() {
	return [
		"Ancient Past",
		"Medieval Times",
		"Modern Era",
		"Distant Future",
		"Steampunk Era",
		"Post-Apocalyptic",
	];
}

// Default places if file is not found
function getDefaultPlaces() {
	return [
		"On a spaceship",
		"Underwater",
		"In a haunted mansion",
		"Inside a giant robot",
		"At a carnival",
		"In a treehouse",
	];
}

// Default art styles if file is not found
function getDefaultArtStyles() {
	return [
		"Simple Pixel Art",
		"Complex Pixel Art",
		"Flat Minimal Vector Art",
		"Textured Vector Art",
		"Low Poly 3D Art",
	];
}

// Default aesthetics if file is not found
function getDefaultAesthetics() {
	return [
		"Futurism",
		"Gothic",
		"Biomechanical",
		"Psychedelic",
		"Surreal",
		"Noir",
	];
}

// Default modes if file is not found
function getDefaultModes() {
	return ["light", "dark"];
}

// Default vibes if file is not found
function getDefaultVibes() {
	return [
		"Silly",
		"Serious",
		"Weird",
		"Fun",
		"Dark",
		"Lighthearted",
		"Romantic",
	];
}

// Default currencies if file is not found
function getDefaultCurrencies() {
	return ["Coins", "Gold", "Dabloons", "Fish", "Tokens", "Rocks", "Dreams"];
}

// Default weapons if file is not found
function getDefaultWeapons() {
	return [
		"Sword",
		"Stick",
		"Rocket",
		"Gun",
		"Bow",
		"Pie",
		"Teddy Bear",
		"Bad Joke",
	];
}
//------------------------------------------------------------------------------

// Generate a random item from an array
function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Apply color to an element
function applyColorToElement(element, colorName) {
	// Set the background color to the named color
	element.style.backgroundColor = colorName.toLowerCase();

	// Set text color based on background brightness for readability
	const isDark = isColorDark(colorName);
	element.style.color = isDark ? "white" : "#333";

	// Adjust border color based on brightness
	element.style.borderColor = isDark
		? "rgba(255, 255, 255, 0.3)"
		: "rgba(0, 0, 0, 0.2)";
}

// Check if a color is dark (for text contrast)
function isColorDark(colorName) {
	// Create a temporary element to compute color
	const tempDiv = document.createElement("div");
	tempDiv.style.color = colorName;
	tempDiv.style.display = "none";
	document.body.appendChild(tempDiv);

	// Get computed color
	const computedColor = getComputedStyle(tempDiv).color;
	document.body.removeChild(tempDiv);

	// Parse RGB values
	const rgb = computedColor.match(/\d+/g);
	if (!rgb) return false;

	// Calculate brightness (standard formula)
	const brightness =
		(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
		1000;

	// Return true if color is dark
	return brightness < 128;
}

// Generate a new game idea
function generateNewIdea() {
	// Define all character roles we need to fill
	const charRoles = ["main", "secondary", "friends", "enemies", "boss"];

	// Generate character terms
	charRoles.forEach((role) => {
		// Check if adjective is frozen
		const adjElement = document.querySelector(
			`.adjective[data-role="${role}"]`
		);
		const adjId = adjElement.getAttribute("data-id") || `${role}-adj`;

		if (!frozenTerms.has(adjId)) {
			const randomAdj = getRandomItem(adjectives);
			adjElement.textContent = randomAdj;
			adjElement.setAttribute("data-id", adjId);
		}

		// Check if noun is frozen
		const nounElement = document.querySelector(`.noun[data-role="${role}"]`);
		const nounId = nounElement.getAttribute("data-id") || `${role}-noun`;

		if (!frozenTerms.has(nounId)) {
			const randomChar = getRandomItem(characters);
			nounElement.textContent = randomChar;
			nounElement.setAttribute("data-id", nounId);
		}
	});

	// Generate vibe term
	const vibeElement = document.querySelector('.vibe[data-role="vibe"]');
	const vibeId = vibeElement.getAttribute("data-id") || "vibe";

	if (!frozenTerms.has(vibeId)) {
		const randomVibe = getRandomItem(vibes);
		vibeElement.textContent = randomVibe;
		vibeElement.setAttribute("data-id", vibeId);
	}

	// Generate currency term
	const currencyElement = document.querySelector(
		'.currency[data-role="currency"]'
	);
	const currencyId = currencyElement.getAttribute("data-id") || "currency";

	if (!frozenTerms.has(currencyId)) {
		const randomCurrency = getRandomItem(currencies);
		currencyElement.textContent = randomCurrency;
		currencyElement.setAttribute("data-id", currencyId);
	}

	// Generate weapon term
	const weaponElement = document.querySelector('.weapon[data-role="weapon"]');
	const weaponId = weaponElement.getAttribute("data-id") || "weapon";

	if (!frozenTerms.has(weaponId)) {
		const randomWeapon = getRandomItem(weapons);
		weaponElement.textContent = randomWeapon;
		weaponElement.setAttribute("data-id", weaponId);
	}

	// Generate time term
	const timeElement = document.querySelector('.time[data-role="time"]');
	const timeId = timeElement.getAttribute("data-id") || "time";

	if (!frozenTerms.has(timeId)) {
		const randomTime = getRandomItem(times);
		timeElement.textContent = randomTime;
		timeElement.setAttribute("data-id", timeId);
	}

	// Generate place term
	const placeElement = document.querySelector('.place[data-role="place"]');
	const placeId = placeElement.getAttribute("data-id") || "place";

	if (!frozenTerms.has(placeId)) {
		const randomPlace = getRandomItem(places);
		placeElement.textContent = randomPlace;
		placeElement.setAttribute("data-id", placeId);
	}

	// Define genre roles
	const genreRoles = ["primary", "secondary"];

	// Generate genre terms
	genreRoles.forEach((role) => {
		const genreElement = document.querySelector(`.genre[data-role="${role}"]`);
		const genreId = genreElement.getAttribute("data-id") || `${role}-genre`;

		if (!frozenTerms.has(genreId)) {
			let randomGenre;
			let attempts = 0;
			const maxAttempts = 10;

			// Ensure primary and secondary genres are different
			do {
				randomGenre = getRandomItem(genres);
				attempts++;

				// Break out if we can't find a different genre after several attempts
				if (attempts >= maxAttempts) {
					break;
				}
			} while (
				role === "secondary" &&
				randomGenre ===
					document
						.querySelector('.genre[data-role="primary"]')
						.textContent.trim()
			);

			genreElement.textContent = randomGenre;
			genreElement.setAttribute("data-id", genreId);
		}
	});

	// Define color roles
	const colorRoles = ["primary", "secondary"];

	// Generate color terms
	colorRoles.forEach((role) => {
		const colorElement = document.querySelector(`.color[data-role="${role}"]`);
		const colorId = colorElement.getAttribute("data-id") || `${role}-color`;

		if (!frozenTerms.has(colorId)) {
			let randomColor;
			let attempts = 0;
			const maxAttempts = 10;

			// Ensure primary and secondary colors are different
			do {
				randomColor = getRandomItem(colors);
				attempts++;

				// Break out if we can't find a different color after several attempts
				if (attempts >= maxAttempts) {
					break;
				}
			} while (
				role === "secondary" &&
				randomColor ===
					document
						.querySelector('.color[data-role="primary"]')
						.textContent.trim()
			);

			colorElement.textContent = randomColor;
			colorElement.setAttribute("data-id", colorId);

			// Apply the actual color as background
			applyColorToElement(colorElement, randomColor);
		}
	});

	// Generate harmony term
	const harmonyElement = document.querySelector(
		'.harmony[data-role="harmony"]'
	);
	const harmonyId = harmonyElement.getAttribute("data-id") || "harmony";

	if (!frozenTerms.has(harmonyId)) {
		const randomHarmony = getRandomItem(harmonies);
		harmonyElement.textContent = randomHarmony;
		harmonyElement.setAttribute("data-id", harmonyId);
	}

	// Generate theme term
	const themeElement = document.querySelector('.theme[data-role="theme"]');
	const themeId = themeElement.getAttribute("data-id") || "theme";

	if (!frozenTerms.has(themeId)) {
		const randomTheme = getRandomItem(themes);
		themeElement.textContent = randomTheme;
		themeElement.setAttribute("data-id", themeId);
	}

	// Generate art style term
	const artStyleElement = document.querySelector(
		'.art-style[data-role="art-style"]'
	);
	const artStyleId = artStyleElement.getAttribute("data-id") || "art-style";

	if (!frozenTerms.has(artStyleId)) {
		const randomArtStyle = getRandomItem(artStyles);
		artStyleElement.textContent = randomArtStyle;
		artStyleElement.setAttribute("data-id", artStyleId);
	}

	// Generate aesthetic term
	const aestheticElement = document.querySelector(
		'.aesthetic[data-role="aesthetic"]'
	);
	const aestheticId = aestheticElement.getAttribute("data-id") || "aesthetic";

	if (!frozenTerms.has(aestheticId)) {
		const randomAesthetic = getRandomItem(aesthetics);
		aestheticElement.textContent = randomAesthetic;
		aestheticElement.setAttribute("data-id", aestheticId);
	}

	// Generate mode term
	const modeElement = document.querySelector('.mode[data-role="mode"]');
	const modeId = modeElement.getAttribute("data-id") || "mode";

	if (!frozenTerms.has(modeId)) {
		const randomMode = getRandomItem(modes);
		modeElement.textContent = randomMode;
		modeElement.setAttribute("data-id", modeId);
	}

	updateFrozenList();
}

// Toggle frozen state of a term
function toggleFrozen(event) {
	const term = event.currentTarget;
	const termId = term.getAttribute("data-id");
	const termType = term.getAttribute("data-type");

	// Don't allow freezing if term hasn't been generated yet
	if (!termId || term.textContent.trim() === "") {
		return;
	}

	// Reapply color styling for color terms when toggling
	if (termType === "color" && term.textContent.trim() !== "") {
		const colorName = term.textContent.trim();
		applyColorToElement(term, colorName);
	}

	if (frozenTerms.has(termId)) {
		// Unfreeze the term
		frozenTerms.delete(termId);
		term.classList.remove("frozen");
	} else {
		// Freeze the term
		frozenTerms.add(termId);
		term.classList.add("frozen");
	}

	updateFrozenList();
}

// Update the frozen terms list display
function updateFrozenList() {
	// Clear current list
	frozenList.innerHTML = "";

	if (frozenTerms.size === 0) {
		frozenList.innerHTML =
			'<p class="no-frozen">No frozen terms yet. Click on any term above to freeze it!</p>';
		return;
	}

	// Create a list item for each frozen term
	frozenTerms.forEach((termId) => {
		// Find the term element
		const termElement = document.querySelector(`[data-id="${termId}"]`);
		if (termElement && termElement.textContent.trim() !== "") {
			const termType = termElement.getAttribute("data-type");
			const termRole = termElement.getAttribute("data-role");
			const termText = termElement.textContent;

			// Create a display element for the frozen term
			const frozenTermItem = document.createElement("div");
			frozenTermItem.className = "frozen-term-item";
			frozenTermItem.textContent = termText;

			// If it's a color term, apply the color to the frozen list item too
			if (termType === "color") {
				frozenTermItem.style.backgroundColor = termText.toLowerCase();
				frozenTermItem.style.color = isColorDark(termText) ? "white" : "#333";
				frozenTermItem.style.borderColor = isColorDark(termText)
					? "rgba(255, 255, 255, 0.3)"
					: "rgba(0, 0, 0, 0.2)";
			}

			// Add role info and snowflake
			const roleSpan = document.createElement("span");
			roleSpan.className = "frozen-role";
			roleSpan.textContent = ` (${termType} for ${termRole})`;

			const snowflakeSpan = document.createElement("span");
			snowflakeSpan.textContent = " ❄️";

			frozenTermItem.appendChild(roleSpan);
			frozenTermItem.appendChild(snowflakeSpan);
			frozenList.appendChild(frozenTermItem);
		}
	});
}

// Reset all frozen terms and clear all content
function resetAllFrozen() {
	// Remove frozen class from all terms
	document.querySelectorAll(".frozen").forEach((term) => {
		term.classList.remove("frozen");
	});

	// Clear all term content back to blank spaces
	document
		.querySelectorAll(
			".adjective, .noun, .genre, .vibe, .currency, .weapon, .color, .harmony, .theme, .time, .place, .art-style, .aesthetic, .mode"
		)
		.forEach((term) => {
			term.textContent = "\u00A0"; // Non-breaking space
			term.removeAttribute("data-id"); // Clear the data-id

			// Reset any color styling
			if (term.classList.contains("color")) {
				term.style.backgroundColor = "";
				term.style.color = "";
				term.style.borderColor = "";
			}
		});

	// Clear frozen terms set
	frozenTerms.clear();

	// Update the frozen list display
	updateFrozenList();

	// Clear the frozen list display
	frozenList.innerHTML =
		'<p class="no-frozen">No frozen terms yet. Click on any term above to freeze it!</p>';
}

// Handle file loading errors gracefully
window.addEventListener("error", function (e) {
	console.error("Error loading resources:", e);
});
