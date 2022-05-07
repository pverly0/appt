import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar,
    ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from 'appt/src/Styles/styles';

<styles/>;

function Result(props) {
    return (
        <ImageBackground
        style={styles.background}>
            <StatusBar style='light'/>

            <Image style={styles.logoS} 
            source={require('appt/src/Images/logoSimples.png')} 
            />
            
            <Text style={{fontSize:30, color:'white', top: 5, textAlign:'center', paddingBottom: 30}}>Resultados:</Text>
            
            <ScrollView style={{maxHeight:'83%'}}>
                <Grid style={{paddingVertical:10}}>
                    <Col size={50}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>Medida</Text>
                        </Row>
                    
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>Dimensão máxima</Text>
                        </Row>
                    
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>Módulo Finura</Text>
                        </Row>
                    
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>M.E.</Text>
                        </Row>
                        
                    </Col>
                        
                    <Col size={25}>
                        
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25, textAlign: 'center'}}>Agregado Miúdo/Graúdo</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>4.8 / 25 mm</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2.56 / 7.02</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2.62 / 2.72 kg/dm³</Text>
                        </Row>
                    
                    </Col>
                </Grid>
                
                <Grid style={{paddingVertical:10}}>
                    <Col size={50}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>A</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>B</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>C</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>D</Text>
                        </Row>
                    
                    </Col>
                    
                    <Col size={25}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>1</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>3</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>4</Text>
                        </Row>
                    
                    </Col>
                </Grid>

                <Grid style={{paddingVertical:10}}>
                    <Col size={50}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>A</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>B</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>C</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>D</Text>
                        </Row>
                    
                    </Col>
                    
                    <Col size={25}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>1</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>3</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>4</Text>
                        </Row>
                    
                    </Col>
                </Grid>

                <Grid style={{paddingVertical:10}}>
                    <Col size={50}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>A</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>B</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>C</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>D</Text>
                        </Row>
                    
                    </Col>
                    
                    <Col size={25}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>1</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>3</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>4</Text>
                        </Row>
                    
                    </Col>
                </Grid>

                <Grid style={{paddingVertical:10}}>
                    <Col size={50}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>A</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>B</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>C</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>D</Text>
                        </Row>
                    
                    </Col>
                    
                    <Col size={25}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>1</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>3</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>4</Text>
                        </Row>
                    
                    </Col>
                </Grid>

                <Grid style={{paddingVertical:10}}>
                    <Col size={50}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>A</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>B</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>C</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>D</Text>
                        </Row>
                    
                    </Col>
                    
                    <Col size={25}>
                    
                        <Row style={styles.cellT}>
                            <Text style={{color:'white', fontSize:25}}>1</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>2</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>3</Text>
                        </Row>
                        
                        <Row style={styles.cell}>
                            <Text style={{color:'white', fontSize:20}}>4</Text>
                        </Row>
                    
                    </Col>
                </Grid>
            </ScrollView>
            
        </ImageBackground>
    );
}

export default Result;