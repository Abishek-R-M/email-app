import React from 'react';
import "./emaildetails.css";

const EmailDetails = () => {
  return (
    <div className='mainpage'>
      <div className='headsection'>
        <p className='logo'> F </p>
        <div>
        <h1>Lorum Ipsum</h1>
        <p className='details'>26/10/2020<span>10:30 a.m</span> </p> </div>
        <button className='favbtn'> Mark as favourite</button>
      </div>
      <div className='maincontent'>
        <p className='mail'> Integer lacinia, ante ut mattis tincidunt, quam augue laoreet elit, vitae consequat arcu lacus ac magna. Nunc euismod in magna eget molestie. Phasellus lacinia in sapien id ultricies. Nulla ac rhoncus nulla. Donec pellentesque tortor iaculis dolor mollis laoreet. Nunc magna orci, suscipit ut nunc fringilla, imperdiet tempus libero. Mauris sed nunc mattis urna tempor tempor vitae eget lorem. Sed pellentesque, tellus vel sagittis dignissim, ipsum erat tempor turpis, id tristique augue mi tincidunt nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum quis nibh scelerisque pretium vitae ac turpis. Cras porta vestibulum lorem sit amet lacinia. Phasellus accumsan est sagittis, scelerisque ligula at, porta arcu. Vestibulum metus justo, tempus eget feugiat id, iaculis tincidunt elit.</p><p>Aliquam diam mauris, porttitor non commodo at, viverra id dui. Proin finibus a nulla id posuere. Donec ultricies cursus metus, at egestas tortor dignissim eu. Aliquam a massa eu erat gravida ultrices. Vivamus venenatis imperdiet purus, at egestas enim elementum quis. Nunc ultricies sapien sapien, gravida porttitor diam porta non. Fusce pretium sodales erat. Donec interdum ipsum odio, sit amet luctus est pharetra non. Mauris euismod neque eu malesuada scelerisque. In ultricies lectus eu libero accumsan, ultricies commodo nibh consequat. Pellentesque condimentum, neque id sollicitudin egestas, risus est lobortis diam, in faucibus sapien tortor eu felis. Cras a turpis aliquam, tristique eros at, ullamcorper tellus. Maecenas at tortor magna.</p><p>Phasellus eu purus hendrerit, blandit ante ut, rhoncus neque. Nullam mattis non velit nec bibendum. Morbi commodo enim nec semper ultrices. Pellentesque sit amet vestibulum leo. Pellentesque blandit diam in placerat viverra. Phasellus posuere velit mauris, et auctor lectus scelerisque eu. Cras turpis lorem, gravida quis congue id, tristique non lorem. Proin sit amet eros sit amet ligula vehicula faucibus nec quis ipsum. Nullam semper urna sit amet justo iaculis porta. Nullam commodo libero pulvinar, faucibus dui in, vive</p>
      </div>
    </div>
  )
}

export default EmailDetails;
