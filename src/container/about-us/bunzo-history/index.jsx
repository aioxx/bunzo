import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from "gatsby";
import HistoryItem from '@components/history-item'
import {
    BunzoHistoryWrap,
    BunzoRow,
    BunzoCol6,
    BunzoHistoryTitle,
} from './style'

const BunzoHistoryArea = () => {
    const bunzoHistoryAreaQery = useStaticQuery(graphql`
        query BunzoHistoryAreaQery {
            aboutUsJson(id: { eq: "about-us-pages" }) {
                id
                history_title
                history {
                    id
                    title
                    decText
                }
            }
        }
    `);
    const {
        history_title,
        history
    } = bunzoHistoryAreaQery.aboutUsJson;

    return (
        <BunzoHistoryWrap>
            <Container>
                <Row>
                    <Col>
                        <BunzoRow>
                            <BunzoCol6>
                                <BunzoHistoryTitle dangerouslySetInnerHTML={{ __html: history_title }}/>
                            </BunzoCol6>
                            <BunzoCol6>
                                {history.map((itemData) => (
                                    <HistoryItem
                                        key={itemData.id}
                                        title={itemData.title}
                                        decText={itemData.decText}
                                    />
                                ))}
                            </BunzoCol6>
                        </BunzoRow>
                    </Col>
                </Row>
            </Container>
        </BunzoHistoryWrap>
    )
}


export default BunzoHistoryArea
