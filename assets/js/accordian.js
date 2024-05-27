function get_li_id(id_) {
  document.getElementById('showcase-nav-li-1').classList.remove('active')
  document.getElementById('showcase-nav-li-2').classList.remove('active')
  document.getElementById('showcase-nav-li-3').classList.remove('active')
  document.getElementById('showcase-nav-li-4').classList.remove('active')
  document.getElementById('showcase-nav-li-5').classList.remove('active')
  const showcase_nav_li = document.getElementById(id_);
  showcase_nav_li.classList.add('active');
  if (id_=='showcase-nav-li-1'){
    document.getElementById('codes').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('mattrab_works').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
  }
  if (id_=='showcase-nav-li-2'){
    document.getElementById('projects').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('mattrab_works').style.display = 'none';
    document.getElementById('codes').style.display = 'block';
  }
  if (id_=='showcase-nav-li-3'){
    document.getElementById('projects').style.display = 'none';
    document.getElementById('codes').style.display = 'none';
    document.getElementById('mattrab_works').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('videos').style.display = 'block';
    document.querySelector('.tab-content').style.padding = '32px';
  }
  if (id_=='showcase-nav-li-4'){
    document.getElementById('projects').style.display = 'none';
    document.getElementById('codes').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('mattrab_works').style.display = 'block';
  }
  if (id_=='showcase-nav-li-5'){
    document.getElementById('projects').style.display = 'none';
    document.getElementById('codes').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('mattrab_works').style.display = 'none';
  }
}
