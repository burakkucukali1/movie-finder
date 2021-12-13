import { serviceWorker } from '../helpers/serviceWorker';
import { streamingMovieUrl, onTvUrl, forRentUrl, inTheatresUrl, freeMoviesUrl, freeTvUrl } from '../service/endpoints'

test('Fetch data check', () => {
    serviceWorker(streamingMovieUrl).then(data => {
        expect(data[0].name).toBe('Red Notice');
    })
});
test('Fetch data check', () => {
    serviceWorker(onTvUrl).then(data => {
        expect(data[0].name).toBe('Hawkeye');
    })
});
test('Fetch data check', () => {
    serviceWorker(forRentUrl).then(data => {
        expect(data[0].name).toBe('Venom: Let There Be Carnage');
    })
});
test('Fetch data check', () => {
    serviceWorker(inTheatresUrl).then(data => {
        expect(data[0].name).toBe('Venom: Let There Be Carnage');
    })
});
test('Fetch data check', () => {
    serviceWorker(freeMoviesUrl).then(data => {
        expect(data[0].name).toBe('Venom: Let There Be Carnage');
    })
});
test('Fetch data check', () => {
    serviceWorker(freeTvUrl).then(data => {
        expect(data[0].name).toBe('Hawkeye');
    })
});
