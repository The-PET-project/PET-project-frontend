import React from "react";
import { Container, Figure, Row } from "react-bootstrap";

export const ChooseUsComponent = () => {
  return (
    <Container className="choose-us">
      <h2 className="text-center">Why choose us?</h2>
      <Row className="choose-us-item">
        <Figure className="d-block mx-auto d-md-flex justify-content-center align-items-center text-center">
          <Figure.Image width={200} height={200} src="racoon.jpg" />
          <Figure.Caption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ipsam velit temporibus totam, incidunt commodi
              voluptatum voluptates voluptas quo. Pariatur libero rem et vitae
              sequi itaque maiores. Similique amet totam, quam inventore,
              temporibus accusantium asperiores consectetur adipisci possimus
              aliquam cupiditate accusamus deserunt sunt fugit nostrum rerum
              mollitia, in molestias unde. Officia vitae quasi corrupti vel,
              suscipit libero.
            </p>
          </Figure.Caption>
        </Figure>
      </Row>
      <Row className="choose-us-item">
        <Figure className="d-block d-md-flex justify-content-center align-items-center text-center">
          <Figure.Image width={200} height={200} src="duck.jpg" />
          <Figure.Caption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              esse rem quo tenetur maxime, qui perferendis, necessitatibus quis
              quae omnis, voluptas harum. Laudantium quibusdam cupiditate eius
              fugiat eveniet optio sequi.
            </p>
          </Figure.Caption>
        </Figure>
      </Row>
      <Row className="choose-us-item">
        <Figure className="d-block d-md-flex justify-content-center align-items-center text-center">
          <Figure.Image width={200} height={200} src="dog-and-cat.jpg" />
          <Figure.Caption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ex aliquam numquam eius? Similique voluptatem saepe fugit
              deserunt, explicabo, assumenda perspiciatis, ut iste omnis aperiam
              atque facere necessitatibus ipsa? Enim odio omnis tempore eos in
              assumenda nostrum reprehenderit ullam praesentium, ipsum
              dignissimos. Totam, necessitatibus id.
            </p>
          </Figure.Caption>
        </Figure>
      </Row>
    </Container>
  );
};
