import ButtonUpd from 'components/atoms/ButtonUpd';
import Typography from 'components/atoms/Typography';
import { JSX } from 'react';
export const DctSvgIcon = () => {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.64645 1.14645C3.84171 0.951184 4.15829 0.951184 4.35355 1.14645L8.85355 5.64645C9.04882 5.84171 9.04882 6.15829 8.85355 6.35355L4.35355 10.8536C4.15829 11.0488 3.84171 11.0488 3.64645 10.8536C3.45118 10.6583 3.45118 10.3417 3.64645 10.1464L7.79289 6L3.64645 1.85355C3.45118 1.65829 3.45118 1.34171 3.64645 1.14645Z" fill="white" />
    </svg>
  )
}


const StyleGuide = (): JSX.Element => (
  <div>
    <p>StyleGuide Component</p>
    <Typography
      style={{
        display: 'block',
        margin: '0 auto',
        marginTop: '50px',
        marginBottom: '30px',
        textAlign: 'center',
        padding: '0 30px',
        width: 'fit-content',
        color: '#ffffff',
        backgroundColor: '#4C0C47',
      }}
      component="h3"
      variant="h3Upd"
    >
      Button Variant Names
    </Typography>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '200px',
        marginRight: '200px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {['Default', 'buttonOutline', 'withoutBorder'].map(variant => (
        <ButtonUpd
          key={variant}
          variant={variant}
          btnText={variant}
          endIcon={<DctSvgIcon />}
          rotateIconOnRTL
        />
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginLeft: '150px',
        marginRight: '150px',
        background: 'rgba(0, 71, 70, 1)',
        height: '100px',
        marginTop: '20px',
      }}
    >
      {[
        'ghostButton',
        'ghostButtonOutline',
        'ghostButtonWithoutBorder',
      ].map(variant => (
        <ButtonUpd
          key={variant}
          variant={variant}
          btnText={variant}
          endIcon={<DctSvgIcon />}
          rotateIconOnRTL
        />
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginLeft: '200px',
        marginRight: '200px',
        height: '100px',
        marginTop: '20px',
      }}
    >
      {['Default', 'buttonOutline'].map(variant => (
        <ButtonUpd
          key={variant}
          variant={variant}
          btnText={variant}
          isLoading={true}
        />
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginLeft: '150px',
        marginRight: '150px',
        background: 'rgba(0, 71, 70, 1)',
        height: '100px',
        marginTop: '20px',
      }}
    >
      {['ghostButton', 'ghostButtonOutline'].map(variant => (
        <ButtonUpd
          isLoading={true}
          key={variant}
          variant={variant}
          btnText={variant}
        />
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginLeft: '550px',
        marginRight: '550px',
        height: '100px',
        marginTop: '20px',
      }}
    >
      {
        <>
          <ButtonUpd
            animateSvg={false}
            variant={'iconButton'}
            btnText={'iconButton'}
            startIcon={<DctSvgIcon />}
          />
          <ButtonUpd
            disabled
            animateSvg={false}
            variant={'iconButton'}
            endIcon={<DctSvgIcon />}
          />
        </>
      }
    </div>
  </div>
);

export default StyleGuide;
