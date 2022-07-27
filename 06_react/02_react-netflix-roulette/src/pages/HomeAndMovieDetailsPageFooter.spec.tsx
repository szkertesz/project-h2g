import HomeAndMovieDetailsPageFooter from "./HomeAndMovieDetailsPageFooter";
import renderer, { ReactTestRenderer } from 'react-test-renderer'

describe('Footer', () => {
    let component: ReactTestRenderer;

    beforeEach(() => {
        component = renderer.create(
            <HomeAndMovieDetailsPageFooter />
        )
    })

    it('should render component', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})