module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.js$': 'babel-jest'
	},
	moduleFileExtensions: ['js'],
	moduleDirectories: ['node_modules', 'src'],
	// Configuración para manejar estáticamente archivos CSS, imágenes, etc.
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',
		'\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js'
	},
	// Configurar la cobertura de código
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js', '!src/**/__tests__/**', '!src/**/__mocks__/**'],
	coverageDirectory: 'coverage'
};
