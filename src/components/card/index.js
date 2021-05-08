import React from 'react'
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card'

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>
}

Card.Image = function CardMeta({ src, ...restProps }) {
  return <Image src={src} {...restProps} />
}

Card.Item = function CardItem({ item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />
}

Card.Feature = function CardFeature({
  children,
  category,
  feature,
  setShouldDisplayFeature,
  ...restProps
}) {
  return (
    <Feature
      src={`/images/${category}/${feature.genre}/${feature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{feature.title}</FeatureTitle>
        <FeatureText>{feature.description}</FeatureText>
        <FeatureClose onClick={() => setShouldDisplayFeature(false)}>
          <img src={'images/icons/close.png'} alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={feature.maturity}>
            {feature.maturity < 12 ? 'PG' : feature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {feature.genre.charAt(0).toUpperCase() + feature.genre.slice(1)}
          </FeatureText>
        </Group>
      </Content>
    </Feature>
  )
}
