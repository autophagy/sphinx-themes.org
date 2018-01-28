import { h, Component } from "preact";
import Card from 'preact-material-components/Card';
import Button from 'preact-material-components/Button';

export default class Theme extends Component<any, any> {
    render() {
      const theme = this.props.theme;
      const src = `html/${theme.pkg_name}/${theme.theme}/screenshot.png`;
      const sample = `html/${theme.pkg_name}/${theme.theme}/index.html`;

      return (
      <div className="col-md-4 p-3">
        <Card>
          <Card.Primary>
            <Card.Title large={ true }>{ theme.pkg_name }</Card.Title>
            <Card.Subtitle>{ theme.theme }</Card.Subtitle>
          </Card.Primary>
          <Card.MediaItem src={ src } x="3" />
          <Button dense><a className="mx-auto" href={ sample }>sample</a></Button>
        </Card>
      </div>
        )
    }
}
