'use client'
import { Grid, Box, Typography, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import WhiteLayout from '../../layout/pagelayout/WhiteLayout';

const IpDetail = () => {
    return (
        <WhiteLayout>
            <PageContainer title="IpDetail" description="IpDetail">
                <Box sx={{ p: 4 }}>
                    {/* IP Name and Price */}
                    <Box mb={4}>
                        <Typography variant="h3" fontSize={{ sm: 40 }}>IP Name</Typography>
                        <Typography variant="h4" fontSize={{ sm: 30 }} mt={2}>
                            500 BTT
                        </Typography>
                        
                    </Box>

                    {/* IP Details */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box mr={{ sm: 5 }}>
                                {/* Thin line above category */}
                            <Box 
                                sx={{ 
                                    mb: 2, 
                                    width: '100%', 
                                    height: '1px', 
                                    backgroundColor: '#E8ECEF' 
                                }}
                            />
                                <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' fontSize={{ sm: 16 }}>
                                    IP Creator
                                </Typography>
                                <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{ sm: 20 }} mt={{ sm: 1 }}>
                                    John Doe
                                </Typography>

                                <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{ xs: 2, sm: 3 }} fontSize={{ sm: 16 }}>
                                    Time Of First Publication
                                </Typography>
                                <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{ sm: 20 }} mt={{ sm: 1 }}>
                                    2024/24/11
                                </Typography>

                                <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{ xs: 2, sm: 3 }} fontSize={{ sm: 16 }}>
                                    Place Of First Publication
                                </Typography>
                                <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{ sm: 20 }} mt={{ sm: 1 }}>
                                    Indonesia
                                </Typography>

                                <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{ xs: 2, sm: 3 }} fontSize={{ sm: 16 }}>
                                    Description
                                </Typography>
                                <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{ sm: 16 }} mt={{ sm: 1 }}>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                                </Typography>

                                <Button 
                                    variant="contained" 
                                    sx={{ mt: 3, backgroundColor: 'black', color: 'white', width: '100%' }}
                                >
                                    Buy IP
                                </Button>
                                {/* Thin line above category */}
                            <Box 
                                sx={{ 
                                    mt: 4, 
                                    width: '100%', 
                                    height: '1px', 
                                    backgroundColor: '#E8ECEF' 
                                }}
                            />
                            </Box>
                        </Grid>

                        {/* Category */}
                        <Grid item xs={12} sm={12}>
                            
                            <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' fontSize={{ sm: 14 }} mt={{ xs: 2, sm: 3 }}>
                                CATEGORY
                            </Typography>
                            <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{ sm: 14 }} mt={{ sm: 1 }}>
                                Patent Rights
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </PageContainer>
        </WhiteLayout>
    );
}

export default IpDetail;
